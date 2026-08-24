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
          MK1's Scorpion encourages clean{" "}
          <Link href={`${neutralPage.href}#footsies`}>footsies</Link>,{" "}
          <Link href={`${neutralPage.href}#whiff`}>whiff-punishes</Link>, and
          conversions. He <strong>lacks complex mechanics</strong> and{" "}
          <strong>teaches fundamentals</strong>:
        </p>
        <blockquote>
          Footsies &rarr; hit-confirm &rarr; combo &rarr; knockdown &rarr;
          strike/throw &rarr; repeat.
        </blockquote>
        <p>
          Scorpion's offense is honest, missing a true mix-up, relying on
          strike/throw and stagger. He has tools for all distances, but{" "}
          <strong>feels most comfortable at mid-range</strong>.
        </p>
        <h2 id="mid">Control mid, play footsies, catch them as they move</h2>
        <p>
          <strong>Don't glue yourself to your foe.</strong> With his basic
          moves, Scorpion is inclined to play better at least at 2-3 steps away.
          Try the following in <em>Practice Mode</em>.
        </p>

        <ul>
          <li>
            <strong>Standing 2</strong> is a safe, <em>disjointed</em> High with
            excellent reach for a 10-frame punch.{" "}
            <em>Your most consistend poke.</em> A <em>good start</em> is to{" "}
            <em>keep Scorpion at the edge of its range</em> and check the
            opponent as they come in.
          </li>

          <li>
            <strong>Forward 3</strong> is a safe, advancing, 12-frame Mid.{" "}
            <em>Your best wake-up check.</em> It's slower, doesn't reach as far,
            but still covers a good distance and probes ducking foes. Switching
            up defensive <strong>2</strong>s with the occasional{" "}
            <strong>F3</strong> is the basis of Scorpion's footsies.
          </li>

          <li>
            <strong>Back 2</strong> is a 9-frame, disjointed High, that is also
            your <em>optimal anti-air</em>. <em>Practice it</em> with a jump-in
            dummy <em>early</em>. It can be shortcut canceled<sup>*</sup> into
            any back-forward special, which means you can convert a failed
            jump-in into a full combo.
          </li>

          <li>
            <strong>Back 3</strong> a pretty unique, disjointed, slow and unsafe
            2-hit, Mid-Low, where the first hit is cancellable into any special.
            It's terrible on paper, but reaches very far, has long active frames
            (17), and the low hit conditions opponents to low block or jump
            preemptively at a certain distance. It's a commitment that requires
            a good read, but tends to catch foes when used seldomly.
          </li>

          <li>
            <strong>Standing 1</strong> is <em>your fastest</em>, safe High
            punch. It's the only plus-frames normal <em>(+2 on block)</em>. You
            can't do proper frame traps, but you can gain breathing space with
            things like <strong>1 &rarr; 1</strong>,{" "}
            <strong>1 &rarr; backdash &rarr; 2</strong>, or{" "}
            <strong>1 &rarr; D1</strong>.
          </li>
        </ul>

        <p className="example">
          <sup>*</sup>For example, <strong>B2 F1</strong> cancels into a Spear,
          allowing you to continue punishment if it connects.
        </p>
      </section>

      <section>
        <h2 id="confirm">Hit-confirm, then convert</h2>

        <p>
          Your combos will most likely begin out of hit-cofirming one of your
          basic punches. Play footsies, and learn to confirm{" "}
          <strong>21 &rarr; BF1</strong>. <strong>BF1</strong> is the Spear -
          one of the best combo extensions for beginners in the game, but it's
          unsafe. <em>Don't go for the Spear if they block.</em>
        </p>

        <p>
          Try to see your opponent's whiff before pressing <strong>2</strong>.
          Walk in and out of range to provoke them. This trains better habbits
          than
        </p>
      </section>

      <section>
        <h2 id="spear">
          The Spear is not a zoning tool <GiSpearHook />
        </h2>
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
