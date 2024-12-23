import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  ReferenceLine,
} from "recharts";

interface ChartData {
  date: string;
  value: number;
}

export function MarketChart({ data }: { data: ChartData[] }) {
  const average = Math.round(
    data.reduce((sum, point) => sum + point.value, 0) / data.length
  );

  return (
    <div className="relative w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
        >
          <ReferenceLine
            y={average}
            stroke="#FFFFFF"
            strokeDasharray="3 3"
            opacity={0.5}
          />
          <XAxis
            dataKey="date"
            stroke="#8B949E"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            dy={10}
            tick={{ fill: "#8B949E", opacity: 0.5 }}
            interval={0}
            padding={{ left: 10, right: 10 }}
          />
          <Line
            type="linear"
            dataKey="value"
            stroke="#3694FF"
            strokeWidth={1.5}
            dot={false}
            activeDot={{ r: 4, fill: "#3694FF" }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="absolute left-0 bottom-[25px] text-xs text-[#babfc5] opacity-50 font-medium bg-gray-500/50 px-2 py-1 rounded-md">
        Source: PolymarketFaker
      </div>
      <div className="absolute right-0 top-8 text-xs text-[#8B949E] opacity-50">
        {average}%
      </div>
    </div>
  );
}
