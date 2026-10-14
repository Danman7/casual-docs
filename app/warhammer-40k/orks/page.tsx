import { getPage } from "@/app/siteMap";
import Image from "next/image";
import Ork from "../../../public/wh40k/ork.webp";
import Link from "next/link";

const orksPage = getPage("/warhammer-40k/orks");
const roundPage = getPage("/warhammer-40k/battle-round");

export const metadata = orksPage.metadata;

export default async function Page() {
  return (
    <>
      <h1>{orksPage.title}</h1>

      <section>
        <Image
          loading="eager"
          src={Ork}
          alt="Scorpion in Mortal Kombat 1"
          className="side-img"
        />
        <p>
          <strong>Orks are a belligerent board-control faction.</strong> They
          come in waves, several threats at a time. Cheap units occupy the
          objectives and block movement. Shooters clear the screens, then melee
          kills whatever's left.
        </p>

        <p>
          <strong>
            The central decision is which units must survive to reach combat,
            and which can be sacrificed?
          </strong>{" "}
          Orks suit players who enjoy aggression, movement puzzles, trading
          units, and managing several threats at once.
        </p>

        <p>
          Despite their rather comic presentation, they are demanding to play
          well.
        </p>

        <h2 id="Waaagh">Waaagh!</h2>

        <p>
          All Ork units can Re-roll{" "}
          <Link href={`${roundPage.href}#charge-phase`}>advance rolls</Link>.
        </p>

        <p>
          <strong>
            Under certain rules, some Orks may become <em>riled up</em>.
          </strong>{" "}
          While riled up they gain a 5+ invulnerable save, [ASSAULT] on all
          ranged weapons, and can charge after advancing. Once per battle all
          Orks may be riled up by declaring a <em>War Cry</em>.
        </p>
      </section>

      <section>
        <h2 id="pros">Swift pressure, then overwhelm</h2>
      </section>
    </>
  );
}
