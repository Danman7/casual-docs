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
          MK1's Scorpion <strong>lacks complex mechanics</strong> or stances. He
          is built around clean{" "}
          <Link href={`${neutralPage.href}#footsies`}>footsies</Link>,
          conversions, and{" "}
          <Link href={`${neutralPage.href}#whiff`}>whiff-punishes</Link>. He
          lacks a true mix-up of his own and instead relies on basic
          strike/throw offense.
        </p>

        <p>
          Although Scorpion has both close and long range tools, he feels{" "}
          <strong>most comfortable mid-screen</strong>. Beginners tend to find
          his reactive play and easy combo routes satisfying. He teaches
          fundamentals and promotes a simple game plan.
        </p>

        <blockquote>
          Footsies &rarr; hit-confirm &rarr; combo &rarr; knockdown &rarr;
          strike/throw &rarr; repeat.
        </blockquote>

        <h2 id="mid">Control mid, catch them as they move</h2>

        <p>
          <strong>Don't glue yourself to your foe.</strong> Scorpion has many
          safe normals with good reach, some of which disjointed. Let's go
          trough the key ones. Try the following in training mode.
        </p>

        <p>
          <strong>Standing 2</strong> is a safe, <em>disjointed</em> High with
          excellent reach for a 10-frame punch. Practice connecting a hit at its
          edge and try to stay there.
        </p>

        <p>
          <strong>Standing 1</strong> is a faster, safe, 7-frame High with much
          shorter reach, but <em>+2 on block</em>. It doesn't offer much frame
          advantage, but it can give you some breathing room up close.
        </p>

        <p>
          <strong>Forward 3</strong> is an advacing, safe, 12-frame Mid. It's
          your primary check for ducking foes and oki, and it leads to your main
          launcher.
        </p>

        <p>
          <strong>Back 2</strong> is your optimal anti-air. It's quick
          (9-frames), makes Scorpion duck and reaches far enough. It can be
          shortcut canceled into any back-forward special, for example{" "}
          <strong>B2 F1</strong> cancels into spear on hit for a full combo out
          of a poorly timed jump-in.
        </p>

        <p>
          <strong>Back 3</strong> is very unique. It's one of Scorpion's few
          slow, and unsafe normals - a <em>disjointed</em>, 21-frame, -19 on
          block, 2-hit Mid-Low, where the first hit is cancellable. It's
          terrible on paper, but it reaches very far and has long active frames
          (17). It's a long-range commitment that plays a role in conditioning,
          can be shotcut cancelled like <strong>B2</strong> and requires a good
          read. <em>Don't try it up close!</em>
        </p>

        <h3 id="pokes">Footsies into pokes</h3>

        <ul>
          <li>
            Are they aproaching? &rarr; <strong>Standing 2</strong> at about 2-3
            steps away
          </li>

          <li>
            Are they outside <strong>Standing 2</strong>? &rarr;{" "}
            <strong>Back 3</strong>
          </li>

          <li>
            Are they jumping in? &rarr; <strong>Back 2</strong>
          </li>

          <li>
            Are they jumping over you? &rarr; <strong>Standing 1/Down 1</strong>{" "}
            as they land
          </li>

          <li>
            Do they keep ducking under your Highs? &rarr; <strong>F3</strong>
          </li>

          <li>
            Are they in your face? &rarr;{" "}
            <strong>
              Standing 1 into another 1 / 1 backdash 2 / 1 into throw
            </strong>
          </li>
        </ul>

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
        <h2 id="condition">Condition, catch and confirm</h2>

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
