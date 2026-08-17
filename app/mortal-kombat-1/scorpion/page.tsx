import { getPage } from "@/app/siteMap";
import Image from "next/image";
import Link from "next/link";
import Scorpion from "../../../public/mk1/scorpion.webp";

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
          MK1's Scorpion is built around fundamentals, being neither an obvious
          rushdown nor a zoning fighter. He{" "}
          <strong>lacks complex mechanics</strong> and relies on clean{" "}
          <Link href={`${neutralPage.href}#footsies`}>footsies</Link>,{" "}
          <Link href={`${neutralPage.href}#whiff`}>whiff-punishes</Link>, and
          strike/throw offense. Even though he has tools for all ranges, he is{" "}
          <strong>most comfortable at mid-screen</strong>.
        </p>

        <p>
          As with other titles, Scorpion is perhaps the most{" "}
          <strong>straightforward, begginer-friendly</strong> character, with
          simple combo routes and mostly safe normals.
        </p>

        <h2 id="buttons">Key buttons</h2>

        <h3 id="normals">Normals</h3>

        <p>Get to know the following in practice mode.</p>

        <p>
          <strong>Standing 2</strong> is a safe, 10-frame, <em>disjointed</em>{" "}
          High with surprisingly good reach (2-3 steps away). It's a good
          mid-range interuption. Practice its span and doing{" "}
          <strong>21 BF1</strong> Spear.
        </p>

        <p>
          <strong>Standing 1</strong> is the fastest, 7-frame High with much
          shorter reach, but <em>+2 on hit</em>. Practice hitting two in a row
          against a reversal dummy as they retaliate. Or doing{" "}
          <strong>1 backdash 2</strong>. It's also a viable anti-air if they are
          on top of you.
        </p>

        <p>
          <strong>Forward 3</strong> is an advacing, safe, 12-frame Mid - the
          foundation of your grounded offense. It checks ducking foes and sets
          up Scorpion's optimal combos with the <strong>F32</strong> launcher.
          Practice doing 3 <strong>F32</strong>s in a row (optimal damage, but
          if you can't 2 are enough). Also, <strong>F3 into throw</strong>,{" "}
          <strong>F3 DB2</strong>.
        </p>

        <p>
          <strong>Back 3</strong> is a very unique move - a <em>disjointed</em>,
          21-frame, -19 on block, 2-hit Mid-Low, where the first hit is
          cancellable. It's terrible on paper, but it reaches very far (jump +
          dash) and has long active frames (17). It's a long-range commitment
          move that requires a good read. Practice cancelling into a conversion{" "}
          <strong>B3 F1</strong> Spear (or any BF special), or{" "}
          <strong>B3 xDB3</strong> (buffers the enhanced teleport so the
          opponent has less chance to meet it with a poke).{" "}
          <em>Don't try it up close!</em>
        </p>

        <p>
          <strong>Back 2</strong> is an optimal, 9-frame anti-air because of
          it's good reach. It can also be cancelled in the same manner as{" "}
          <strong>Back 3</strong> for a full conversion out of a poorly timed
          opponent's jump-in. Practice with a forward jumping dummy to do{" "}
          <strong>B2 F1</strong>, or <strong>B2 F2</strong>.
        </p>
      </section>

      <section>
        <h2 id="mid">Control mid, punish whiffs, win neutral</h2>

        <p>
          A good beginner's starting point is to stay at the edge of{" "}
          <strong>Standing 2</strong>'s reach and check the opponent when they
          approach.
        </p>

        <p>
          If they like to stay in your face, rely on the quick{" "}
          <strong>Standing 1</strong> with what you practiced above (
          <strong>1 into 1</strong> punish a folow-up,{" "}
          <strong>1 into throw</strong> to punish blocking).
        </p>

        <h3 id="conditioning">Conditioning</h3>

        <p>
          Once an opponent has tasted <strong>B3</strong>'s reach, they
          anticipate it at a certain range and start low blocking or jumping
          preemptively. You can meet a poor jump-in with <strong>B2</strong>, or
          do a <strong>B3</strong> into a low blocker, then enhance teleport{" "}
          <strong>xDB3</strong> (quick and safe).
        </p>

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
