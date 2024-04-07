import React from "react";
import ItemLayout from "./ItemLayout.jsx";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
          <h2 className="text-xl md:text-2xl text-left text-accent w-full capitalize mb-8">
            Weaver of the digital loom, crafting spells on the web.
          </h2>
          <p className="font-light mb-2 text-sm sm:text-md md:text-lg">
            The cauldron bubbles, the broom twitches! I, Fatima, a witch of
            thirty autumns, brew potent concoctions not in a cast-iron pot, but
            with code beneath a digital moon. The web, a swirling vortex,
            beckons with the secrets of DCI - a powerful spell!
          </p>
          <p className="font-light mb-2 text-sm sm:text-md md:text-lg">
            My magic isn&apos;t just pixels. I weave websites like tapestries,
            but hidden beneath lies the backend, a labyrinth of data and logic.
            With arcane incantations (okay, backend languages) I summon
            databases and servers, the invisible forces that make websites tick.
          </p>
          <p className="font-light mb-2 text-sm sm:text-md md:text-lg">
            But there&apos;s more! When the fire is low, I&apos;m surrounded by
            another magic - my coven, my family. My daughters&apos; laughter
            echoes like an incantation, and stories whispered from the East,
            anime, transport me to fantastical realms.
          </p>
          <p className="font-light text-sm sm:text-md md:text-lg">
            Nature also calls to this digital witch. Walks under whispering
            trees and quiet moments with a captivating book replenish my spirit
            for the next magical website I conjure. So next time you browse a
            seamless website, remember it might just be me, Fatima the Web
            Witch, working my magic!
          </p>
        </ItemLayout>
        {/* personal info */}
        <ItemLayout className="col-span-full sm:col-span-6 lg:col-span-4 flex-col">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize mb-4">
            Grimoire Glimpse
          </h2>
          <p>
            <span className="font-bold text-accent mr-2">Name:</span> Fatima
            Badaoui
          </p>
          <p>
            <span className="font-bold text-accent mr-2">Profession:</span> Full
            Stack Web Developer
          </p>
          <p>
            <span className="font-bold text-accent mr-2">Address:</span> Linden,
            Hessen (DE)
          </p>
        </ItemLayout>
        <ItemLayout className="col-span-full sm:col-span-6 lg:col-span-4 flex-col">
          <h2 className="text-xl md:text-2xl text-left w-full capitalize mb-4">
            Summoning Sigil
          </h2>
          <p>
            <span className="font-bold text-accent mr-2">Email:</span>{" "}
            f.badaoui1993@gmail.com
          </p>
          <p>
            <span className="font-bold text-accent mr-2">Phone:</span> +49 179
            5681264
          </p>
        </ItemLayout>
        {/* github stats */}
        <ItemLayout className="col-span-full md:col-span-4 p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=FatimaBadaoui&theme=transparent&show_icons=true&count_private=true&hide_border=true&title_color=ee00ff&icon_color=ee00ff&text_color=cccccc&text_bold=false"
            alt="Fatima Badaoui Github"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className="col-span-full md:col-span-8 p-0">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=FatimaBadaoui&theme=transparent&show_icons=true&count_private=true&hide_border=true&title_color=ee00ff&icon_color=ee00ff&text_color=cccccc&text_bold=false"
            alt="Fatima Badaoui Github"
            loading="lazy"
          />
        </ItemLayout>
        {/* skills */}
        <ItemLayout className="col-span-full flex-col">
          <h2 className="text-2xl text-left w-full capitalize mb-8">
            The Arcane Arsenal
          </h2>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,html,css,sass,bootstrap,tailwind,react,vite,styledcomponents,express,mongodb,nodejs,git,github,npm,postman,vscode,md,notion,linux,ubuntu,nextjs,threejs,androidstudio,kotlin"
            alt="Fatima Badaoui Github"
            loading="lazy"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
