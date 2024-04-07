import Image from "next/image";
import bg from "../../public/background/home-bg3.png";
import RenderModel from "./components/RenderModel.jsx";
import { Witch } from "./components/models/Witch.jsx";
import Navigation from "./components/navigation/index.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-55 -z-10"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Witch />
        </RenderModel>
      </div>
    </main>
  );
}
