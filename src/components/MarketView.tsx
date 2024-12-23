import { PredictionMarketProps } from "./MarketInfo";
import { MarketChart } from "./MarketChart";
import polymarketLogo from "/polymarket.svg";
import { Clock, Settings, ArrowRightLeft } from "lucide-react";
import { useEffect, useState } from "react";

// Move sample data generation to a function
function generateChartData(finalChance: number) {
  const numberOfPoints = 12;
  const result = [];

  for (let i = 0; i < numberOfPoints; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (numberOfPoints - i) * 3);

    let value;
    if (i >= numberOfPoints - 3) {
      // Last three points converge to finalChance
      const remaining = numberOfPoints - i;
      value = finalChance + (Math.random() - 0.5) * 10 * remaining;
    } else {
      // Random values between 0 and 100 for earlier points
      value = Math.random() * 100;
    }

    result.push({
      date: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      value: Math.max(0, Math.min(100, value)), // Clamp between 0 and 100
    });
  }

  return result;
}

export function MarketView({
  predictionData,
}: {
  predictionData: PredictionMarketProps;
}) {
  const [chartData, setChartData] = useState(
    generateChartData(predictionData.chance)
  );

  useEffect(() => {
    setChartData(generateChartData(predictionData.chance));
  }, [predictionData.chance]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <img
              src={predictionData.imageUrl}
              alt="Market thumbnail"
              className="w-[64px] h-[64px] rounded-lg object-cover bg-[#0E1420]"
            />
            <h2 className="text-lg font-bold m-0 mr-8">
              {predictionData.name}
            </h2>
          </div>
          <img
            src={polymarketLogo}
            alt="Polymarket"
            className="h-8 opacity-30"
          />
        </div>

        <div className="flex gap-5 text-[#858d92] text-sm">
          <span>${predictionData.volumeUsd.toLocaleString()} Vol.</span>
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>
              {predictionData.endDate.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="mb-6">
          <span className="block text-[#8B949E] mb-2">YES</span>
          <div className="flex gap-2.5 items-end">
            <span className="text-[#2d9cdb] text-2xl font-bold">
              {predictionData.chance}% chance
            </span>
            <span className="text-[#FF4D4D] text-sm font-bold mb-[2px]">
              ↓ {100 - (predictionData.chance as number)}%
            </span>
          </div>
        </div>

        <div className="mb-6 h-[200px] w-full rounded-lg p-0 pt-8">
          <MarketChart data={chartData} />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {["1H", "6H", "1D", "1W", "1M", "ALL"].map((period) => (
              <button
                key={period}
                className={`font-bold px-3 py-1.5 rounded-full text-md transition-colors ${
                  period === "ALL"
                    ? "bg-white text-black"
                    : "text-[#8B949E] hover:bg-[#2D3741] hover:text-white"
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button className="p-1.5 text-white hover:text-white transition-colors">
              <ArrowRightLeft size={20} />
            </button>
            <button className="p-1.5 text-white hover:text-white transition-colors">
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
