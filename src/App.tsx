import { useState } from "react";
import "./App.css";
import { MarketInfo, PredictionMarketProps } from "./components/MarketInfo";
import { MarketView } from "./components/MarketView";

function App() {
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
    <div className="min-h-screen bg-[#0E1420] flex items-center justify-center p-4">
      <div className="bg-[#1A2634] text-white rounded-lg w-full max-w-2xl">
        <MarketInfo
          predictionData={predictionData}
          onDataChange={handleInputChange}
        />
        <MarketView predictionData={predictionData} />
      </div>
    </div>
  );
}

export default App;
