import "./App.css";
import MarketFaker from "./components/MarketFaker";

function App() {
  return (
    <div className="min-h-screen bg-[#0E1420] flex flex-col gap-4 items-center justify-center p-2 sm:p-4">
      <div className="flex flex-col gap-4 items-center text-center px-4">
        <img
          src="/icon.svg"
          alt="Polymarket Faker Logo"
          width="64"
          height="64"
        />
        <p className="text-3xl sm:text-5xl font-bold text-white">
          Polymarket Faker
        </p>
        <p className="text-base sm:text-lg text-[#8B949E]">
          Useful for memes, shitposting, and other lolz oriented activities.
        </p>
      </div>
      <MarketFaker />
      <div className="flex flex-col gap-2">
        <span className="text-xs text-[#8B949E] opacity-75 px-4 text-center">
          This tool is for entertainment purposes only. It is not affiliated
          with Polymarket and should not be used to create misleading or
          fraudulent content.
        </span>
        <div className="flex justify-center text-xs text-[#8B949E] opacity-60 px-4 text-center">
          <a
            href="https://github.com/OzTamir/fake-polymarket"
            className="text-[#2d9cdb] hover:underline px-1"
          >
            Created
          </a>
          by{" "}
          <a
            href="https://oztamir.com/"
            className="text-[#2d9cdb] hover:underline px-1"
          >
            oztamir.eth
          </a>{" "}
          for shits and giggles.
        </div>
      </div>
    </div>
  );
}

export default App;
