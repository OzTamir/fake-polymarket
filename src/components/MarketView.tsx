import { PredictionMarketProps } from "./MarketInfo";
import { MarketChart } from "./MarketChart";
import polymarketLogo from "/polymarket.svg";
import { Clock, Settings, ArrowRightLeft } from "lucide-react";
import { useEffect, useState } from "react";

function calculateMarketChange(chance: number) {
  const chanceRatio = chance / 100;
  let min = -30 + chanceRatio * 30; // Will go from -30 to 0 as chance increases
  let max = 30 - (1 - chanceRatio) * 30; // Will go from 30 to 0 as chance decreases

  // Ensure we always have some range to work with
  min = Math.min(Math.max(min, -30), 0);
  max = Math.max(Math.min(max, 30), 0);

  const change = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.floor(change);
}

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
    <div className="p-2 sm:p-6">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
            {(() => {
              const change = calculateMarketChange(predictionData.chance);
              const isPositive = change >= 0;
              return (
                <span
                  className={`text-sm font-bold mb-[2px] ${
                    isPositive ? "text-[#4CAF50]" : "text-[#FF4D4D]"
                  }`}
                >
                  {isPositive ? "↑" : "↓"} {Math.abs(change)}%
                </span>
              );
            })()}
          </div>
        </div>

        <div className="mb-6 h-[200px] w-full rounded-lg p-0 pt-8">
          <MarketChart data={chartData} />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-1">
            {["1H", "6H", "1D", "1W", "1M", "ALL"].map((period) => (
              <button
                key={period}
                className={`font-bold px-3 py-1.5 rounded-full text-sm transition-colors ${
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
