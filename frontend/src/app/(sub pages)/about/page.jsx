import Image from "next/image";
import bg from "../../../../public/background/about-bg.png";
import RenderModel from "../../components/RenderModel.jsx";
import Hat from "@/app/components/models/Hat.jsx";
import AboutDetails from "@/app/components/about/index.jsx";
import { Henny_Penny } from "next/font/google";
import clsx from "clsx";


const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-henny",

});

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="fixed top-0 left-0 w-full h-full object-cover object-center opacity-35 -z-10"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center ">
        <div className="absolute flex flex-col items-center text-center top-1/2 left-1/2  -translate-x-1/2">
          <h1
            className={clsx(
              hennyPenny.variable,
              "font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent font-henny"
            )}
          >
            Fatima
          </h1>
          <p className="font-light text-foreground mb-3 text-xl">
            Step into the moonlit grove and meet the one who conjures these
            wonders.
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
