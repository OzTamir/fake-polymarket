import { useState } from "react";
import "../App.css";
import { MarketInfo, PredictionMarketProps } from "./MarketInfo";
import { MarketView } from "./MarketView";

function MarketFaker() {
  const [predictionData, setPredictionData] = useState<PredictionMarketProps>({
    name: "Will Bitcoin be above $150,000 by the end of 2025?",
    imageUrl: "https://bitcoin.org/img/home/bitcoin-img.svg",
    chance: 4,
    volumeUsd: 903616,
    endDate: new Date("2025-01-09"),
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof PredictionMarketProps
  ) => {
    const value = e.target.value;
    setPredictionData((prev) => ({
      ...prev,
      [field]:
        field === "chance" || field === "volumeUsd"
          ? Number(value)
          : field === "endDate"
          ? new Date(value)
          : value,
    }));
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-full gap-4 items-center justify-center p-4">
      <div className="bg-[#1A2634] text-white rounded-lg w-full p-4 lg:py-14 py-8">
        <MarketInfo
          predictionData={predictionData}
          onDataChange={handleInputChange}
        />
      </div>
      <div className="bg-[#1d2b39] text-white rounded-lg w-full p-4 py-6">
        <div className="border border-[#2D3B4A] rounded-lg p-4">
          <MarketView predictionData={predictionData} />
        </div>
      </div>
    </div>
  );
}

export default MarketFaker;
