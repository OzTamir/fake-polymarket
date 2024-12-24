import { useState } from "react";
import "../App.css";
import { MarketInfo, PredictionMarketProps } from "./MarketInfo";
import { MarketView } from "./MarketView";
import { useToPng } from "@hugocxl/react-to-image";

function MarketFaker() {
  const [predictionData, setPredictionData] = useState<PredictionMarketProps>({
    name: "Will Bitcoin be above $150,000 by the end of 2025?",
    imageUrl: "https://bitcoin.org/img/home/bitcoin-img.svg",
    chance: 4,
    volumeUsd: 903616,
    endDate: new Date("2025-01-09"),
  });

  const [{ isLoading }, convertToPng, ref] = useToPng<HTMLDivElement>({
    onSuccess: (dataUrl) => {
      const link = document.createElement("a");
      link.download = `prediction-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    },
    onError: (error) => {
      console.error("Error exporting to PNG:", error);
    },
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
      <div className="bg-[#1A2634] text-white rounded-lg w-full p-4 py-6">
        <MarketInfo
          predictionData={predictionData}
          onDataChange={handleInputChange}
        />
        <div className="flex justify-center items-center mt-4">
          <button
            className="bg-[#2D3B4A] text-white px-4 py-2 rounded-lg"
            onClick={convertToPng}
            disabled={isLoading}
          >
            {isLoading ? "Exporting..." : "Export Screenshot"}{" "}
            <span className="px-2">📸</span>
          </button>
        </div>
      </div>
      <div className="bg-[#1d2b39] text-white rounded-lg w-full p-4 py-6">
        <div
          ref={ref}
          className="border border-[#2D3B4A] rounded-lg p-4 bg-[#1d2b39]"
        >
          <MarketView predictionData={predictionData} />
        </div>
      </div>
    </div>
  );
}

export default MarketFaker;
