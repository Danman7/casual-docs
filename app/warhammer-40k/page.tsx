import Image from "next/image";
import Link from "next/link";

import { SourceLink } from "@/app/ui/SourceLink";
import Warhammer40k from "../../public/wh40k/warhammer-40k.webp";

export default async function Page() {
  return (
    <>
      <h1>Warhammer 40,000</h1>

      <section>
        <Image
          src={Warhammer40k}
          alt="Space Marines doing battle with Chaos Space Marines"
          className="picture profile-img object-[0%_10%]"
        />

        <p>
          The{" "}
          <Link
            href="https://assets.warhammer-community.com/warhammer40000_core&key_corerules_eng_24.09-5xfayxjekm.pdf"
            target="_blank"
          >
            Core Rulebook
          </Link>{" "}
          describes Warhammer 40,000 (WH40k) as a{" "}
          <em>
            tabletop wargame in which players command armies of miniatures in an
            attempt to win through a mixture of skill, tactics, and luck
          </em>
          . This sums up the game, but it doesn't capture the wider hobby -
          collecting and painting the models, and the extensive lore depicted in
          the books and media.
        </p>

        <p>
          Here, however, we'll keep it simple and focus on the rules and armies
          of the latest edition. WH40k changes somewhat with each installment,
          so always refer to the official codexes when playing.
        </p>
      </section>

      <section>
        <h2 id="our-sources">Our sources</h2>

        <div className="flex-list">
          <SourceLink href="https://wahapedia.ru/" text="Wahapedia" />

          <SourceLink
            href="https://www.warhammer.com/"
            text="Warhammer Official"
          />

          <SourceLink
            href="https://1d6chan.miraheze.org/wiki/Category:Warhammer_40,000"
            text="1d6chan"
          />

          <SourceLink
            href="https://www.youtube.com/@auspextactics"
            text="Auspex Tactics"
            type="youtube"
          />

          <SourceLink
            href="https://www.reddit.com/r/Warhammer40k/"
            text="r/Warhammer40k"
            type="reddit"
          />

          <SourceLink
            href="https://www.reddit.com/r/WarhammerCompetitive/"
            text="r/WarhammerCompetitive"
            type="reddit"
          />
        </div>
      </section>
    </>
  );
}
