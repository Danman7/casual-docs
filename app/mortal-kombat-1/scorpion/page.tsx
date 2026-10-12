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

          <li>
            [B+3] or [Spear] when they commit to ground movement from afar.
          </li>
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
          Without a standing, cancellable Overhead or Low, Scorpion on his own
          opens players up through respecting continuations, then stopping
          early. <strong>Make blocked [F+3]s matter.</strong> Occasionally mix
          in [1,2,2] staggers, knowing they can be punished.
        </p>

        <ul>
          <li>[F+3,2] &rarr; they get hit &rarr; go for juggles into combo</li>
          <li>
            [F+3,2] &rarr; they block &rarr; disengage &rarr; [F+3 &rarr; Throw]
          </li>

          <li>
            [F+3,2] &rarr; they duck &rarr; disengage &rarr; respect with
            [F+3,4]
          </li>

          <li>
            [F+3,4] &rarr; they block &rarr; disengage &rarr; [F+3 &rarr; Throw]
          </li>

          <li>
            [1,2,2] &rarr; they block then tend to counter immediately &rarr;
            disengage &rarr; [1 &rarr; 1] or [1 &rarr; Backdash &rarr; 2]
          </li>

          <li>
            [1,2,2] &rarr; they keep blocking &rarr; disengage &rarr; [1 &rarr;
            Throw]
          </li>
        </ul>

        <p>
          Make them hesitate, then grab them or return to your range. It works
          best when you choose the next commitment instead of forcing one after
          every block.
        </p>
      </section>

      <section>
        <h2 id="combos">Combos - high reward from simple confirms</h2>
        <p>
          Scorpion's main routes are not mechanically exotic from over the top
          buttons and timings. Most normals need a Spear to convert. [F+3,2]
          already launches, so you can save Spear for later. The question is
          when to spend Spear, not which route to memorize first.
        </p>

        <ul>
          <li>A second Spear in a combo drops the opponent.</li>
          <li>Optimal routes go through a [F+3,2] juggle.</li>
        </ul>

        <p>Building blocks can be reused.</p>

        <ul>
          <li>
            <strong>Starter:</strong> Confirm [2,1], [1,2], or [F+3] into
            [B,F+1]. Or [F+3,2] into a juggle.
          </li>

          <li>
            <strong>Juggle:</strong> [F+3,2]. 3 juggles for grounded routes. 2
            juggles for air, [B+2] (reduced air budget), and some Kameo routes.
          </li>

          <li>
            <strong>Air extension:</strong> [jump &rarr; air 1,2], extended for
            1 bar by [EX air D,B+2].
          </li>

          <li>
            <strong>Ender:</strong> [3,3,3 &rarr; B,F+2] is simplest, and deals
            more damage, but depends on the air budget. [3,3 &rarr; D,B+2] is
            always available after a Spear.
          </li>
        </ul>

        <p>Here are some examples.</p>

        <p>
          <strong>Start simple</strong>
          <br />
          [Starter &rarr; B,F+1 &rarr; 3,3,3 &rarr; B,F+2]{" "}
          <sup>217-227 DMG</sup>
        </p>

        <p>
          <strong>Ground bread-n-butter (BnB)</strong>
          <br />
          [Starter &rarr; B,F+1 &rarr; (F3,2)<sup>x3</sup> &rarr; F3,4 &rarr;
          B,F+2] <sup>332-349 DMG</sup>
        </p>

        <p>
          <strong>One-bar air route</strong>
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
          <strong>One-bar late Spear air route</strong>
          <br />
          [(F3,2)<sup>x2</sup> &rarr; jump &rarr; air 1,2 &rarr; EX air D,B+2
          &rarr; delayed air 1,1,1 &rarr; land &rarr; B,F+1 &rarr; 3,3 &rarr;
          DB2] <sup>407 DMG</sup>
        </p>

        <p>
          Get a launch &rarr; Juggle &rarr; Choose ground or air branch based on
          meter &rarr; End based on Spear
        </p>
      </section>

      <section>
        <h2 id="kameos">
          Kameos extend pressure and conversions significantly
        </h2>

        <p>
          Scoprion can push harder with Kameo assists and cover attacks that
          would otherwise end his turn. While recharging, he goes back to
          spacing and staggers.
        </p>

        <p>
          <strong>Mavado</strong> is a practical first choice. He converts
          [Throw], armored Charge, [2,1,4], and [F+3,4] into combos, while also
          making air extensions meterless.
        </p>

        <p>
          <strong>Ferra</strong> gives a command grab, and an Overhead/Low mix,
          which combines well with [B+3] and can be micro-delayed for a reset.
          She makes opponents fear blocking as much as moving.
        </p>

        <p>
          <strong>Janet Cage</strong> also turns [Throw] and armored Charge into
          combos, also can extend air routes without meter, and supports strong
          corner damage, but requires more precise timings.
        </p>

        <p>
          <strong>Khameleon</strong> is another demaning, but flexible partner,
          that changes what she offers as her form rotates. Kitana helps with
          lifts and resets, Mileena adds an overhead, and Jade offers projectile
          protection and a mid extension.
        </p>

        <p>
          <strong>Motaro</strong> covers risky commitments and creates more room
          for pressure or a reset with staggers. His teleports suit a player who
          wants to keep control of spacing after an attack.
        </p>

        <p>
          <strong>Jax</strong> can cover Spin or any simple knockdown pressure,
          plus he gives armored conversions. His assists are delayed, requiring
          more planning that Movad's, but support Scorpion post-commitment.
        </p>

        <p>
          <strong>Tremor</strong> is for layered setups after a knockdown. He
          covers Spin, extends pressure, and makes the opponent defend another
          sequence.
        </p>
      </section>
    </>
  );
}
