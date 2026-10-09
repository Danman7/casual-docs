import { getPage } from "@/app/siteMap";
import Image from "next/image";
import Scorpion from "../../../public/mk1/scorpion.webp";
import Scorpion_2 from "../../../public/mk1/scorpion_2.webp";

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
          Scorpion is an{" "}
          <strong>
            honest low-complexity character. A sensible choice for beginners
          </strong>
          , built around two fundamentals: <strong>whiff-punish</strong> and{" "}
          <strong>strike/throw</strong> stagger.
        </p>

        <p>
          His safe long-reaching moves, many of which disjointed, make him feel{" "}
          <strong>natural at mid-range</strong>. From there, he lets his
          opponents move first, checking, catching and converting any clean hit
          into a combo.
        </p>

        <p>
          On his own, Scorpion's <strong>offense is limited</strong>. But his
          kit is modular enough for him to{" "}
          <strong>work with almost any Kameo</strong>, adding safer pressure,
          new mix-ups, or easier conversions.
        </p>
      </section>

      <section>
        <h2 id="tools">Main tools at a glance</h2>

        <p>
          <strong>[2], [2,1]:</strong> A long-reaching 10f -2{" "}
          <em>disjointed</em> High that leads into a -6 Mid hit-confirm. The{" "}
          <strong>best overall combination of speed, range and damage</strong>{" "}
          for a neutral check into whiff-punish.
        </p>

        <p>
          <strong>[1], [1,2], [1,2,2]:</strong> An all-purpose short-n-quick 7f,{" "}
          <strong>+2 on block</strong> High jab. It continues into a -3 High
          hit-confirm, ending in a -3 (-13 flawless) Overhead, bating an
          up-block, good for stagger.
        </p>

        <p>
          <strong>[F+3]</strong> is a 12f -3 <strong>advancing Mid</strong>. The
          basis of Scorpion's offense. Go for damage with the{" "}
          <strong>[F+3,2]</strong> -6 High <em>launcher</em> that can be
          repeated up to 3 times. If they duck under the High, respect them
          instead with <strong>[F+3,4]</strong> -6 Mid-Mid.
        </p>

        <p>
          <strong>[B+2]</strong> Is the{" "}
          <strong>chief answer to a jump-in</strong> - a 9f 0{" "}
          <em>disjointed</em> High. It cancels nicely into Spear, easily
          converting a successful anti-air into a combo.
        </p>

        <p>
          <strong>[B+3]:</strong> A unique, very far-reaching,{" "}
          <em>disjointed</em>, slow (21f), and unsafe (-19) two hit Mid-Low.
          First hit can be cancelled. It{" "}
          <strong>makes ground movement unsafe at range</strong>, but it's
          easily punished if blocked.
        </p>

        <p>
          <strong>[B,F+1] Spear</strong> is the signature Scorpion full-screen
          17f -28 High projectile that stuns on hit and restands the target next
          to you. <em>A second Spear within the same combo drops them.</em> Very
          punishable. <strong>Not a zoning tool.</strong> It mostly converts a
          confirmed hit into a combo and catches careless movement at range.
        </p>

        <p>
          <strong>[D,B+2] Spin:</strong> 20f -25 Overhead{" "}
          <strong>combo ender</strong> that can support knockdown pressure.
        </p>

        <p>
          <strong>[EX B,F+1] Charge:</strong> Scorpion's{" "}
          <strong>armored</strong> 13f Mid answer to knockdown pressure from the
          opponent. It's unsafe (-21).
        </p>

        <p>
          [B+2] and [B+3] can shortcut cancel into any B,F special. For example,
          [B+2 &rarr; F+1] cancels into a Spear.
        </p>
      </section>

      <section>
        <h2 id="react">A superb reactive neutral</h2>

        <Image
          src={Scorpion_2}
          alt="Scorpion performing standing 2 in Mortal Kombat 1"
          className="side-img"
        />

        <p>
          Scorpion's moves{" "}
          <strong>cover good space, rather than overwhelm</strong> the opponent.
          They can make movement risky at any distance. All of the following can
          start a combo.
        </p>

        <ul>
          <li>[2] when they are a few steps away.</li>

          <li>[B+2] when they jump.</li>

          <li>[F+3] when they crouch a lot.</li>

          <li>[B+3] or [Spear] when they commit to ground movement.</li>
        </ul>

        <p>
          <strong>Don't glue yourself to your foe.</strong> Make them move at
          your range. Stand near the edge of [2]'s reach and watch.{" "}
          <strong>Patience is key.</strong> Move in and out. Don't chase after
          every blocked attack.
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

        <p>Hold range &rarr; confirm the hit &rarr; take the combo.</p>
      </section>

      <section>
        <h2 id="offense">A staggered strike/throw offense</h2>

        <p>
          Going on the offense as Scorpion without Kameo support is limited.
          Without a standing, cancellable Overhead or Low, he opens players up
          through making them respect continuations, then stopping early, using
          throws, delayed buttons, and situational challenges. [F+3] is a
          natural anchor.
        </p>

        <ol>
          <li>[F+3,2] or [F+3,4] at first.</li>

          <li>Then [F+3 &rarr; Throw / D+1 / Block]</li>
        </ol>

        <p>
          You can risk getting closer and add [1] staggers. The full [1,2,2]
          string ends in an Overhead, baiting an up-block. You can condition,
          then follow up with:
        </p>

        <ul>
          <li>
            [1 &rarr; 1] if they tend to counter after blocking and you can hit
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
          limited than reacting to the opponent. You have to make them guess
          whether you are going to continue, throw, or disengage.
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
          <li>Optimal routes go through a [F+3,2] juggle.</li>
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
          <strong>Mavado</strong> is the safe, easy all-around buff. [Throw],
          [EX B,F+2], [2,1,4] and [F+3,4] become combo starters, providing Throw
          and Armor routes. Air extension can use Kameo instead of meter, for
          just a bit less damage. You can break armor with the slide if timed
          right.
        </p>

        <p>
          <strong>Ferra</strong> supplies an actual chainable Overhead/Low mix,
          which combines especially well with [B+3]. If you call her to
          Scorpion's back, but micro-step forward instead of immediately
          hitting, it can reset a combo. Like Mavado, she also adds Throw
          routes, but not Armored routes.
        </p>

        <p>
          <strong>Motaro</strong> is a reset/safety Kameo. No throw or armor
          conversions, but Scorpion gets his MK11 style Port, where he can keep
          his distance if he doesn't hit-confirm. There are some resets
          available with the tail projectile as well.
        </p>

        <p>
          If you have the skill <strong>Janet</strong> comes close to a more
          resource-efficient Mavado. She enables throw and armor combos, as well
          as meterless air extensions, while recharging quickly.
        </p>

        <p>
          <strong>Khameleon</strong> is a very flexible option, again provided
          you have the skill. Kitana does resets, Mileena adds an Overhead and
          easy extensions, and Jade adds a Mid extender plus projectile
          protection. As with any main, however, having the right tool at a time
          is inconsistent.
        </p>
      </section>
    </>
  );
}
