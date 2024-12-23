import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { Slider } from "./ui/custom-slider";

export interface PredictionMarketProps {
  name: string;
  imageUrl: string;
  chance: number;
  volumeUsd: number;
  endDate: Date;
}

interface MarketInfoProps {
  predictionData: PredictionMarketProps;
  onDataChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof PredictionMarketProps
  ) => void;
}

export function MarketInfo({ predictionData, onDataChange }: MarketInfoProps) {
  const formatVolume = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="grid gap-4 p-6 border-b border-[#2D3741]">
      <div className="grid gap-2">
        <Label htmlFor="market-name">Market Name</Label>
        <Input
          id="market-name"
          className="bg-[#0E1420] border-[#2D3741] text-white placeholder:text-[#8B949E]"
          placeholder="Market Name"
          value={predictionData.name}
          onChange={(e) => onDataChange(e, "name")}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="image-url">Image URL</Label>
        <Input
          id="image-url"
          className="bg-[#0E1420] border-[#2D3741] text-white placeholder:text-[#8B949E]"
          placeholder="Image URL"
          value={predictionData.imageUrl}
          onChange={(e) => onDataChange(e, "imageUrl")}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="chance">Probability (%)</Label>
        <div className="pt-4 pb-2 px-1">
          <div className="flex justify-between mb-2 text-sm">
            <span className="text-red-500">0%</span>
            <span className="text-blue-500">100%</span>
          </div>
          <Slider
            id="chance"
            min={0}
            max={100}
            step={1}
            value={[predictionData.chance]}
            onValueChange={(value) => {
              const event = {
                target: { value: value[0].toString() },
              } as React.ChangeEvent<HTMLInputElement>;
              onDataChange(event, "chance");
            }}
            className="relative flex items-center select-none touch-none w-full h-5"
          />
          <div className="mt-2 text-center text-white">
            {predictionData.chance}%
          </div>
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="volume">Trading Volume (USD)</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B949E]">
            $
          </span>
          <Input
            id="volume"
            className="bg-[#0E1420] border-[#2D3741] text-white placeholder:text-[#8B949E] pl-6"
            type="text"
            placeholder="Volume (USD)"
            value={formatVolume(predictionData.volumeUsd)}
            onChange={(e) => {
              const numericValue = e.target.value.replace(/[^0-9.]/g, "");
              const event = {
                ...e,
                target: {
                  ...e.target,
                  value: numericValue,
                },
              };
              onDataChange(event, "volumeUsd");
            }}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="end-date">End Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal bg-[#0E1420] border-[#2D3741] text-white hover:bg-[#1C2333]",
                !predictionData.endDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {predictionData.endDate ? (
                format(predictionData.endDate, "PPP")
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-[#0E1420] border-[#2D3741]">
            <Calendar
              mode="single"
              selected={predictionData.endDate}
              onSelect={(date) => {
                if (date) {
                  const event = {
                    target: { value: date.toISOString() },
                  } as React.ChangeEvent<HTMLInputElement>;
                  onDataChange(event, "endDate");
                }
              }}
              initialFocus
              className="text-white"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
