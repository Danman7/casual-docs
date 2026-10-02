import { getPage } from "@/app/siteMap";
import Image from "next/image";
import Scorpion from "../../../public/mk1/scorpion.webp";
import Scorpion_2 from "../../../public/mk1/scorpion_2.webp";
import { Divider } from "@/app/ui/Divider";

const scorpionPage = getPage("/mortal-kombat-1/scorpion");

export const metadata = scorpionPage.metadata;

export default function Page() {
  return (
    <>
      <h1>{scorpionPage.title}</h1>

      <section>
        <Image
          loading="eager"
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
          className="max-w-1/3 ml-4 float-right"
        />
        <p>
          MK1's Scorpion <strong>lacks complex mechanics</strong>, encourages a{" "}
          <strong>simple game plan</strong>, and{" "}
          <strong>teaches fundamentals</strong>:
        </p>

        <p>
          He is neither a zoner, nor a rushdown characer, but rather{" "}
          <strong>feels most comfortable at mid-range</strong>. His offense is
          honest, missing a true mix-up, relying on strike/throw stagger.
        </p>

        <p>
          His moves are mostly direct, having something for every root scenario,
          making him a <strong>safe choice for beginners</strong>. A guide for
          Scorpion can be a guide for the game's basics. That being said, he can
          be seen in high-level matches as well. His kit is modular enough for
          him to work with any Kameo.
        </p>
      </section>

      <section>
        <h2 id="tools">Top tools at a glance</h2>

        <p>
          <strong>[2]</strong> 10f, -2, disjointed High with a{" "}
          <strong>good reach</strong> that is a{" "}
          <strong>prime mid-range neutral button.</strong>
        </p>

        <p>
          <strong>[2,1]</strong> -6 Mid <strong>principal hit-confirm</strong>,
          balancing speed, reach and damage.
        </p>

        <p>
          <strong>[1]</strong> Short, 7f, <strong>+2</strong> High jab, enabling
          fast hit-confirms and staggers with its extensions.
        </p>

        <p>
          <strong>[F+3]</strong> 12f, -3, advancing Mid, grounding Scorp's
          staggered offense.
        </p>

        <p>
          <strong>[F+3,2]</strong> -6, Mid-High launcher, that can be{" "}
          <strong>repeated up to 3 times</strong> for an{" "}
          <strong>optimal combo starter and extension</strong>. Second hit can
          be ducked under for a counter.
        </p>
        <p>
          <strong>[F+3,4]</strong> -6, Mid-Mid <strong>respect string</strong>{" "}
          without a cancel. No more ducking under <strong>[F+3,2]</strong>.
        </p>

        <p>
          <strong>[B+2]</strong> 9f, 0, disjointed High, making Scorpion
          micro-duck. Can be cancelled into a special out of a jump-in,
          constituting his <strong>main anti-air</strong>.
        </p>

        <p>
          <strong>[B+3]</strong> A unique, <strong>very far reaching</strong>,
          disjointed, 21f, -19, but 17 active frames, two hit Mid-Low. Only the
          first hit can be cancelled. A long-range space-control commitment.
        </p>

        <p>
          <strong>[B,F+1] Spear</strong> - Full-screen, 17f, -28, High
          projectile, that stuns on hit and restands the target next to you.{" "}
          <em>A second Spear within the same combo drops them.</em> A lot of
          space-control with 131 active frames, but unsafe and predictable.
        </p>

        <p>
          <strong>[D,B+2] Spin</strong> - 20f, -25, 66 active frames Mid{" "}
          <strong>optimal combo ender</strong> and occasional oki tool.
        </p>

        <p>
          <strong>[EX B,F+1] Charge</strong> - 13f, -21,{" "}
          <strong>armored</strong> Mid reversal that switches sides.
        </p>
      </section>

      <section>
        <h2 id="react">A superb reactive neutral</h2>

        <Image
          loading="eager"
          src={Scorpion_2}
          alt="Scorpion performing standing 2 in Mortal Kombat 1"
          className="sm:float-right sm:ml-4 sm:max-w-1/2"
        />

        <p>
          Scorpion <strong>covers good space, rather than overwhelm</strong> the
          opponent. There is a button that makes movement risky for every
          distance.
        </p>

        <ul>
          <li>[2] catches approaches or whiffs from a few steps away.</li>

          <li>[B+2] catches jump-ins.</li>

          <li>[F+3] catches crouching.</li>

          <li>
            [B+3] makes staying on the ground at jump + dash distance
            uncomfortable. This tends to make them jump preemptively.
          </li>

          <li>
            Spear catches dashes, whiffs, and sometimes jimp-ins full-screen.
          </li>
        </ul>

        <p>
          All of the above can start a combo. So,{" "}
          <strong>don't glue yourself to your foe</strong>. Scorpion is strong
          when he stays at least at the edge of [2]'s reach and lets the
          opponent move first.
        </p>

        <blockquote>Footsies &rarr; hit-confirm &rarr; combo</blockquote>

        <p>
          Block, wait, give up your turn when appropriate, and punish their
          impatience. Your basic routine is the following:
        </p>

        <ul>
          <li>
            [2,1] &rarr; they <em>block</em> &rarr; you block, duck, or
            disengage
          </li>

          <li>
            [2,1] &rarr; they <em>get hit</em> &rarr; Spear &rarr; combo
          </li>
        </ul>

        <p>
          Switch the initial string as the situation dictates. [B+2] and [B+3]
          can shortcut cancel into any B,F special. For example, [B+2 &rarr;
          F+1] cancels into a Spear.
        </p>
      </section>

      <section>
        <h2 id="offense">A staggered strike/throw offense</h2>

        <p>
          Without a standing, cancellable Overhead or Low, Scorpion opens
          players up trough making them respect continuations, then stopping
          early, using throws, delayed buttons, and situational challenges.{" "}
          [F+3] is a natural anchor.
        </p>

        <ol>
          <li>[F+3,2] or [F+3,4] at first.</li>

          <li>Then [F+3 &rarr; Throw / D+1 / Block]</li>
        </ol>

        <p>
          You can risk getting closer and add [1] staggers. The full [1,2,2]
          string ends in an Overhead, bating an up-block. You can condition,
          then follow up with:
        </p>

        <ul>
          <li>
            [1 &rarr; 1] if they tend to counter afte blocking and you can hit
            the 2 frame window.
          </li>

          <li>
            [1 &rarr; Backdash &rarr; 2] if they tend to counter with short
            punches.
          </li>

          <li>[1 &rarr; D+1] if they tend to counter with Highs.</li>

          <li>[1 &rarr; Throw] if they tend to hold block.</li>
        </ul>

        <p>
          [1 &rarr; F+3] in case they do a [D+1] after blocking will{" "}
          <em>not work</em> as the +2 on block is not enough to compensate the
          12f start.
        </p>

        <p>
          Going on the offense with Scorpion is not impractical. Rather more
          limited than reacting to the opponent. You have to make them guess are
          you is going to continue, throw, or disengage.
        </p>
      </section>

      <section>
        <h2 id="combos">Combos - high reward from simple confirms</h2>
        <p>
          Scorpion can{" "}
          <strong>convert almost any whiff into good damage</strong>. His main
          routes are also not mechanically exotic, in the sense of over the top
          buttons and timings. At first you only need to remember that:
        </p>
        <ul>
          <li>Optimal routes go trough a [F+3,2] juggle.</li>
          <li>A second Spear in a combo drops the opponent.</li>
        </ul>
        <p>
          <strong>Spear starts or extends the juggle.</strong> Then it becomes
          simply "When will I use Spear and how many juggles can I do?" given
          gravity scaling.
        </p>

        <h3 id="blocks">Building blocks</h3>

        <p>
          Scorpion's universal conversion is{" "}
          <strong>[Starter &rarr; Spear]</strong>.
        </p>
        <ul>
          <li>[2,1 &rarr; B,F+1] - best of damage, reach, and speed.</li>
          <li>[1,2 &rarr; B,F+1]</li>
          <li>[F+3 &rarr; B,F+1]</li>

          <li>[B+2 &rarr; F+1] - reduces air budget</li>
          <li>[B+3 &rarr; F+1] - scales better over longer combos</li>
        </ul>
        <p>
          That consumes Spear early, changing continuations after the juggle.
        </p>

        <ul>
          <li>3 juggles for grounded routes.</li>
          <li>2 juggles for air, [B+2], and some Kameo routes.</li>
        </ul>

        <p>
          [jump &rarr; air 1,2] opens the <em>air branch</em>, while [EX air
          D,B+2] consumes a bar to extend it.
        </p>

        <p>Then there are the natural enders:</p>

        <ul>
          <li>
            [3,3,3 &rarr; B,F+2] is simplest, and deals more damage, but depends
            on the air budget.
          </li>
          <li>[3,3 &rarr; D,B+2] is always available after a Spear.</li>
        </ul>

        <h3 id="routes">Route examples</h3>

        <p>
          <strong>Easy conversion</strong>
          <br />
          [Starter &rarr; B,F+1 &rarr; 3,3,3 &rarr; B,F+2]{" "}
          <sup>217-227 DMG</sup>
        </p>

        <p>
          <strong>Meterless BnB</strong>
          <br />
          [Starter &rarr; B,F+1 &rarr; (F3,2)<sup>x3</sup> &rarr; F3,4 &rarr;
          B,F+2] <sup>332-349 DMG</sup>
        </p>

        <p>
          <strong>Air extension - 1 bar</strong>
          <br /> [Starter &rarr; B,F+1 &rarr; (F3,2)<sup>x2</sup> &rarr; jump
          &rarr; air 1,2 &rarr; EX air D,B+2 &rarr; delayed air 1,1,1 close to
          ground &rarr; air D,B+2] <sup>367-385 DMG</sup>
        </p>

        <p>
          <strong>Late Spear</strong>
          <br />
          [(F3,2)<sup>x3</sup> &rarr; 4 &rarr; B,F+1 &rarr; 3,3 &rarr; D,B+2]{" "}
          <sup>365 DMG</sup>
        </p>

        <p>
          <strong>Air late Spear - 1 bar</strong>
          <br />
          [(F3,2)<sup>x2</sup> &rarr; jump &rarr; air 1,2 &rarr; EX air D,B+2
          &rarr; delayed air 1,1,1 &rarr; land &rarr; B,F+1 &rarr; 3,3 &rarr;
          DB2] <sup>407 DMG</sup>
        </p>

        <blockquote>
          Get a launch &rarr; Juggle &rarr; Choose ground or air branch based on
          meter &rarr; End based on Spear
        </blockquote>
      </section>

      <section>
        <h2 id="kameos">
          Kameos extend pressure and conversions significantly
        </h2>

        <p>
          With Kameo support, Scorpion can break away from defense and staggers,
          and push harder.
        </p>

        <p>
          <strong>Mavado</strong> is the safe, all-around buff. [Throw], [EX
          B,F+2], [2,1,4] and [F+3,4] become combo starters, providing Throw and
          Armor routes. Air extension can use Kameo instead of meter, for just a
          bit less damage.
        </p>

        <p>
          <strong>Ferra</strong> provides an actual chainable Overhead/Low mix,
          which combines especially well with [B+3]. If you call her to
          Scorpion's back, but micro-step forward instead of immediately
          hitting, it can reset the combo for a vortex-y offense. Like Mavado,
          she also adds Throw routes, but not Armored routes.
        </p>
      </section>
    </>
  );
}
