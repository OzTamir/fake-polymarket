import "./App.css";
import MarketFaker from "./components/MarketFaker";

function App() {
  return (
    <div className="min-h-screen bg-[#0E1420] flex flex-col gap-4 items-center justify-center p-4">
      <div className="flex flex-col gap-4 pl-6 items-center -mt-32">
        <img
          src="/icon.svg"
          alt="Polymarket Faker Logo"
          width="64"
          height="64"
        />
        <p className="text-5xl font-bold text-white">Polymarket Faker</p>
        <p className="text-lg text-[#8B949E]">
          Useful for memes, shitposting, and other lolz oriented activities.
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
