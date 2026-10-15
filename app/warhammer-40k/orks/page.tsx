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
          come in waves. Cheap units occupy the objectives and block movement.
          Shooters clear the screens, then melee kills whatever's left.
        </p>

        <p>
          <strong>
            The central decision is which units must survive to reach combat,
            and which can be sacrificed?
          </strong>{" "}
          Orks suit players who enjoy aggression, trading units, and managing
          multiple engagements at once.
        </p>

        <p>
          Despite their rather comic presentation, they remain demanding to play
          well.
        </p>

        <h2 id="Waaagh">Waaagh!</h2>

        <p>
          All Ork units can Re-roll{" "}
          <Link href={`${roundPage.href}#charge-phase`}>advance rolls</Link> at
          any time.
        </p>

        <p>
          <strong>
            Under certain conditions, some Orks may become <em>riled up</em>.
          </strong>{" "}
          While riled up they gain a 5+ invulnerable save, [ASSAULT] on all
          ranged weapons, and can charge after advancing. Once per battle all
          Orks may be riled up for a turn by declaring a <em>War Cry</em>. It's
          a major commitment window.
        </p>
      </section>

      <section>
        <h2 id="pros">Force the enemy to deal with several threats at once</h2>

        <p>
          <strong>Riled up Orks cover a lot of space.</strong> Advance rerolls
          plus advance-and-charge let them reach targets well beyond their
          normal movement. This can force opponents to retreat preemptively or
          keep valuable units away from objectives.
        </p>

        <p>
          <strong>
            There is strong melee across the board, with good objective tools.
          </strong>{" "}
          Boyz have a ton of attacks, OC2, and can start actions while engaged.
          Nobz and Meganobz handle heavier infantry. Beast Snaggas and Squighogs
          do vehicles and monsters. Then Gretchin secure objectives, while
          Stormboyz and Kommandos provide mobility and forward presence.
        </p>
      </section>

      <section>
        <h2 id="cons">The right Orc must reach the right target</h2>

        <p>
          <strong>
            Your troops compete for space and mistakes during the{" "}
            <Link href={`${roundPage.href}#movement-phase`}>
              Movement Phase
            </Link>{" "}
            hurt.
          </strong>{" "}
          Units exposed too early may die before fighting. Yet, a unit that was
          staged too far may fail its charge. All the while, large mobs and
          vehicles have to get around each other to reach their targets.
        </p>

        <p>
          <strong>Peak performance is only a window.</strong>
        </p>
      </section>
    </>
  );
}
