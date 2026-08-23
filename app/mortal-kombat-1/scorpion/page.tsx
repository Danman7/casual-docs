import { getPage } from "@/app/siteMap";
import Image from "next/image";
import Link from "next/link";
import Scorpion from "../../../public/mk1/scorpion.webp";
import { GiSpearHook } from "react-icons/gi";

const scorpionPage = getPage("/mortal-kombat-1/scorpion");
const neutralPage = getPage("/mortal-kombat/neutral");

export const metadata = scorpionPage.metadata;

export default function Page() {
  return (
    <>
      <h1>{scorpionPage.title}</h1>

      <section>
        <Image
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
          className="max-w-1/3 ml-4 float-right"
        />

        <p>
          MK1's Scorpion is{" "}
          <strong>not a character that entertains complex mechanics</strong>,
          stances or gimmicks. He is good at{" "}
          <Link href={`${neutralPage.href}#footsies`}>footsies</Link>,{" "}
          <Link href={`${neutralPage.href}#whiff`}>whiff-punishes</Link>, and
          conversions, therefore he <strong>teaches fundamentals</strong> - a
          simple game plan:
        </p>

        <blockquote>
          Footsies &rarr; hit-confirm &rarr; combo &rarr; knockdown &rarr;
          strike/throw &rarr; repeat.
        </blockquote>

        <p>
          Scorpion's offense is honest, lacking a true mix-up, relying on
          strike/throw and stagger. He has tools for all distances, but{" "}
          <strong>feels most comfortable at mid-range</strong>.
        </p>

        <h2 id="mid">Control mid, play footsies, catch them as they move</h2>

        <p>
          <strong>Don't glue yourself to your foe.</strong> Start{" "}
          <em>Practice Mode</em> and check out <strong>Standing 2</strong>. It's
          a safe, <em>disjointed</em> High with excellent reach for a 10-frame
          punch.{" "}
          <strong>Start by keeping Scorpion at the edge of 2's reach.</strong>{" "}
          Are they approaching? Check them with <strong>2</strong>.
        </p>

        <p>
          Are they ducking under your <strong>2</strong>s? Switch it up on them
          with <strong>Forward 3</strong> - a safe, 12-frame Mid. It's a bit
          slower, but it's advancing, covers good distance, checks chouching
          foes and has explosive continuations. For now, only practice mixing
          defensive <strong>2</strong> with a seldom <strong>F3</strong>.
        </p>

        <p>
          Are they jumping in? <strong>Back 2</strong> is your optimal anti-air.
          It's quick 9-frame, disjointed High with decent reach. It can be
          shortcut canceled into any back-forward special, which means you can
          convert a failed jump-in into a full combo. Practice this move early.
        </p>

        <p className="example">
          For example, <strong>B2 F1</strong> cancels into a Spear, allowing you
          to continue punishment if it connects.
        </p>

        <p>
          Are they staying further away than <strong>2</strong>'s reach?
          Scorpion has a pretty unique, disjointed, but slow and unsafe{" "}
          <strong>Back 3</strong>. It's a 2-hit attack, Mid-Low, where the first
          hit is cancellable into any special. It's terrible on paper, but
          reaches very far, has long active frames (17) and the low hit
          conditions opponents into low blocking or jumping preemptively. Thus
          it works well with <strong>B2</strong> when they do the latter. Still,
          it requires commitment, hence a good read.
        </p>

        <p>
          Finally, if they are in your face, resort to{" "}
          <strong>Standing 1</strong> - your fastes, shortest, safe High. It's
          your most basic punch, bit it's also <em>+2 on block</em>. You can't
          do proper frame traps, but you can gain breathing space with things
          like <strong>1 &rarr; 1</strong>,{" "}
          <strong>1 &rarr; backdash &rarr; 2</strong>, or{" "}
          <strong>1 &rarr; D1</strong>.
        </p>

        <p>
          For the time being, learn the ranges of these 5 attaks and focus on
          catching a whiff.
        </p>

        <section>
          <h2 id="whiff">Hit-confirm and convert almost any whiff</h2>

          <p>
            Your combos will most likely begin out of hit-cofirming one of your
            basic punches. Playing footsies, learn to confirm{" "}
            <strong>21 &rarr; BF1</strong>. <strong>BF1</strong> is the Spear
            and one of the best combo extensions in the game for begginers.
          </p>
        </section>

        <h3 id="spear">
          The Spear is not a zoning tool <GiSpearHook />
        </h3>

        <p>
          Scorpion's signature Spear <strong>BF1</strong> is an unsafe,
          17-frame, high projectile, which stuns the target on hit and restands
          them next to you. A second spear in the same combo will knock them
          down. It controls a lot of space, but can easily be ducked under,
          jumped over or teleported around. Using it consistently at some
          distance will result in a punish.
        </p>

        <p>
          Instead, try to catch them mid-step. The Spear is great when they dash
          forward, jump, or setup some buff.
        </p>

        <p>
          It's also an <strong>outstanding combo extender</strong> as it reduces
          the timing and spacing factors. Because it can extend only once per
          combo, it's important to know if your current route uses Spear early
          or late. More on that bellow.
        </p>
      </section>

      <section>
        <h2 id="whiff">Practice whiff-punish, not prediction</h2>

        <p></p>

        <h3 id="anti-air">Anti-air hierarchy</h3>

        <ol>
          <li>
            <strong>Back 2</strong> - most practical
          </li>

          <li>
            <strong>Standing 1</strong> - close and fast, but matchup dependent
          </li>

          <li>
            <strong>Down 2</strong> - classic uppercut
          </li>

          <li>
            <strong>D1/D4</strong> - situational
          </li>
        </ol>
      </section>

      <section>
        <h2 id="offense">A plain staggered, stike/throw offense</h2>

        <p>
          <strong>Forward 3</strong> is not the fastest, most reachy proactive
          aggression, but is optimal for damage. After the opponent is knocked
          down, walk up to them and check them with <strong>F3</strong>. If you
          get a read, starta a 3x <strong>F32</strong> juggle combo.{" "}
          <strong>Forward 3</strong> can also be staggered or mixed with a throw
          or a chain spin for the impatient (<strong>DB2</strong>).
        </p>

        <p>
          <strong>214</strong> is a safe completion of the{" "}
          <strong>Standing 2</strong> path, that has very good reach, and a very
          tight armor gap before the last hit. You can{" "}
          <strong>21 stagger backdash punish response with 21/Spear</strong>.
        </p>
      </section>

      <section>
        <h2 id="damage">Bread-n-butter routes</h2>

        <p>You can convert almost any clean hit into a decent combo.</p>
      </section>
    </>
  );
}
