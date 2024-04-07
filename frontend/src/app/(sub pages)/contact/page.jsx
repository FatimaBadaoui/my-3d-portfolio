import Image from "next/image";
import bg from "../../../../public/background/contact-bg.png";
import Form from "@/app/components/contact/Form.jsx";
import Socials from "@/app/components/contact/Socials.jsx";
import { Henny_Penny } from "next/font/google";
import clsx from "clsx";

const hennyPenny = Henny_Penny({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-henny",
});

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="fixed top-0 left-0 w-full h-full object-cover object-center opacity-35 -z-10"
      />
      <article className="relative w-full flex flex-col items-center px-8 sm:py-0 justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-1/2">
          <h1
            className={clsx(
              hennyPenny.variable,
              "text-accent font-semibold text-center text-6xl capitalize font-henny"
            )}
          >
            Summon the witch
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Seeking a connection with Fatima Nightshade, weaver of the digital
            realm? Here, beneath the flickering light of the digital moon, you
            can cast your message. <br /> Let us weave a conversation and see
            what magic we can conjure together!
          </p>
        </div>

        <Form />

        <Socials />
      </article>
    </>
  );
}
