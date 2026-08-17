import { getPage } from "@/app/siteMap";
import Image from "next/image";
import MK1Logo from "../../public/mk1/logo.webp";
import { SourceLink } from "../ui/SourceLink";

const mortalKombatPage = getPage("/mortal-kombat-1");

export const metadata = mortalKombatPage.metadata;

export default function Page() {
  return (
    <>
      <h1>{mortalKombatPage.title}</h1>

      <section>
        <Image
          src={MK1Logo}
          alt="Mortal Kombat 1 Logo"
          className="max-w-1/3 mr-4 float-left"
        />

        <p>
          Mortal Kombat 1 (2023) is the twelfth mainline Mortal Kombat game and
          the successor to Mortal Kombat 11. Despite its title, it is not a
          remake of the original game, but the beginning of a new timeline
          created after the events of MK11: Aftermath. Mechanically, it
          continues the modern 2D fighting-game formula established by Mortal
          Kombat 9, while moving away from some of MK11's slower, more defensive
          systems toward faster movement, longer combos, stronger offensive
          pressure, and more player expression.
        </p>
      </section>

      <section>
        <h2 id="our-sources">Our sources</h2>

        <div className="list">
          <SourceLink
            href="https://wiki.supercombo.gg/w/Main_Page"
            text="SuperCombo Wiki"
          />

          <SourceLink
            href="https://glossary.infil.net/index.html"
            text="The Fighting Game Glossary by Infil"
          />

          <SourceLink
            href="https://www.youtube.com/@PNDKM"
            text="PNDK&M"
            type="youtube"
          />

          <SourceLink
            href="https://www.youtube.com/@Diff"
            text="Diff"
            type="youtube"
          />

          <SourceLink
            href="https://www.youtube.com/@rooflemonger"
            text="rooflemonger"
            type="youtube"
          />

          <SourceLink
            href="https://www.reddit.com/r/MortalKombat/"
            text="r/MortalKombat"
            type="reddit"
          />

          <SourceLink
            href="https://www.reddit.com/r/MortalKombatGameplay/"
            text="r/MortalKombatGameplay"
            type="reddit"
          />
        </div>
      </section>

      <section>
        <h2 id="kameos">Kameo Fighters</h2>

        <p>
          The biggest addition is the Kameo system. Each player chooses a main
          fighter and a separate Kameo fighter who can be called during the
          match for assists. Kameos can extend combos, cover unsafe attacks,
          create pressure, provide projectiles, enable mix-ups, improve
          movement, or give a character tools they normally lack. This makes
          character choice only part of building a game plan—the same fighter
          can play quite differently depending on which Kameo accompanies them.
        </p>
      </section>

      <section>
        <h2 id="up-block">Up block</h2>

        <p>
          MK1 introduces Up Block, a defensive mechanic performed by blocking
          upward against certain overhead and jumping attacks. A successful Up
          Block increases the opponent's recovery, often allowing attacks that
          would normally be safe to be punished. However, attempting one carries
          additional risk, particularly against throws and delayed offense. This
          gives defenders a stronger answer to predictable aerial pressure while
          adding another layer to the attacker-defender mind game.
        </p>
      </section>
    </>
  );
}
