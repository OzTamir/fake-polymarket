import "./App.css";
import MarketFaker from "./components/MarketFaker";

function App() {
  return (
    <div className="min-h-screen bg-[#0E1420] flex flex-col gap-4 items-center justify-center p-4">
      <div className="flex flex-col gap-4 pl-6">
        <p className="text-2xl font-bold text-white">
          Create a fake Polymarket UI
        </p>
        <p className="text-sm text-[#8B949E]">
          Useful for memes, shitposting, and other shananigans.
        </p>
      </div>
      <MarketFaker />
      <div className="absolute bottom-10 w-full flex justify-center text-sm text-[#8B949E] opacity-75">
        <a
          href="https://github.com/OzTamir/fake-polymarket"
          className="text-[#2d9cdb] hover:underline hover:text-xl transition-all duration-300 ease-in-out px-1"
        >
          Created
        </a>
        by{" "}
        <a
          href="https://oztamir.com/"
          className="text-[#2d9cdb] hover:underline hover:text-xl transition-all duration-300 ease-in-out px-1"
        >
          oztamir.eth
        </a>{" "}
        for shits and giggles.
      </div>
    </div>
  );
}

export default App;
