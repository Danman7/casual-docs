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
          MK1's Scorpion <strong>lacks complex mechanics</strong>, encourages a{" "}
          <strong>simple game plan</strong> and{" "}
          <strong>teaches fundamentals</strong>:
        </p>

        <blockquote>
          <Link href={`${neutralPage.href}#footsies`}>Footsies</Link> &rarr;{" "}
          <Link href={`${neutralPage.href}#whiff`}>whiff-punish</Link> &rarr;
          combo &rarr; knockdown &rarr; strike/throw &rarr; repeat.
        </blockquote>

        <p>
          He is neither a zoner, nor a rushdown characer, but rather{" "}
          <strong>feels most comfortable at mid-range</strong>. His offense is
          honest, missing a true mix-up, relying on strike/throw stagger.
        </p>

        <p>
          His tools are somewhat limited but direct, making him a{" "}
          <strong>decent choice for beginners</strong>. A guide for Scorpion can
          be a guide for the game's basics. That being said, he can be
          frequently seen in high-level matches as well. His kit is modular
          enough for him to work well with most any Kameo, giving him style
          flexibility.
        </p>

        <h2 id="mid">Key normals control mid</h2>
        <p>
          <strong>Don't glue yourself to your foe.</strong> Scorpion is inclined
          to play better 2-3 steps away.
        </p>

        <p>
          <strong>Standing 2</strong> is a safe, <em>disjointed</em> High with
          excellent reach for a 10-frame punch. This is{" "}
          <em>your most consistent mid-range poke.</em>
        </p>

        <p>
          <strong>Standing 1</strong> is <em>your fastest</em> 7-frames,
          shortest, safe, <em>+2 on block</em> High punch.
        </p>

        <p>
          <strong>Forward 3</strong> is a safe, advancing, 12-frame Mid. It's a
          bit slower, doesn't reach as far, but still covers good ground and
          handles crouching foes.
        </p>

        <p>
          <strong>Back 2</strong> is a 9-frame, disjointed High, that is also
          your <em>essential anti-air</em>. <em>Practice it</em> with a jump-in
          dummy <em>early</em>. It can be shortcut canceled into any
          back-forward special, which means you can convert a failed jump-in
          into a full combo.
        </p>

        <p className="example">
          For example, <strong>B2 &rarr; F1</strong> cancels into a Spear,
          allowing you to continue punishment if it connects.
        </p>

        <p>
          <strong>Back 3</strong> a pretty unique, disjointed, slow and unsafe
          2-hit, Mid-Low, where the first hit is cancellable into any special.
          It's terrible on paper, but reaches very far, has long active frames
          (17), and the Low attack conditions opponents to crouch-block or jump
          preemptively. It's a commitment that that tends to trouble foes when
          used after a good read.
        </p>
      </section>

      <section>
        <h2 id="confirm">React and confirm</h2>

        <p>
          A <em>good start</em> is to{" "}
          <em>
            keep Scorpion at the edge of <strong>Standing 2</strong>'s range
          </em>{" "}
          and check the opponent as they come in. Use{" "}
          <strong>Standing 1</strong> only if they are on top of you. Once you
          get comfortable with the range and speed, start hit-confirming{" "}
          <strong>12</strong> and <strong>21</strong>. <strong>21</strong> is
          better because it reaches further and deals more damage. This is the
          initial routine.
        </p>

        <ul>
          <li>
            <strong>21</strong> &rarr; they block &rarr;{" "}
            <strong>you block</strong>
          </li>

          <li>
            <strong>21</strong> &rarr; they get hit &rarr; <strong>BF1</strong>{" "}
            Spear &rarr; combo
          </li>
        </ul>

        <p>
          The same works with <strong>B2</strong>, so practice{" "}
          <strong>B2 &rarr; F1</strong> as well. While playing defensively, try
          as much as you can to see your opponent's whiff before pressing{" "}
          <strong>2</strong>.
        </p>

        <h3 id="spear">
          The Spear is not a zoning tool <GiSpearHook />
        </h3>

        <p>
          Scorpion's signature Spear <strong>BF1</strong> is an unsafe,
          17-frame, high projectile, which stuns the target on hit and restands
          them next to you.{" "}
          <em>A second spear in the same combo will knock them down</em>{" "}
          instead. It controls a lot of space, but can easily be ducked under,
          jumped over or teleported around.
        </p>

        <p>
          Use it inside a combo or try to catch them mid-step. It performs
          poorly when they keep blocking or throwing projectiles, but works
          great when they dash forward or jump in, which can be provoked.
        </p>

        <p className="example">
          For example, throwing a deliberate <strong>Standing 1</strong> punch
          into empty air at mid range, indicates a whiff and may trigger a
          reaction in the opponent. <strong>1 &rarr; BF1</strong> is a cheap,
          but legitimate way to make them dash into your Spear.
        </p>
      </section>

      <section>
        <h2 id="offense">A staggered offense</h2>

        <p>
          On his own, Scorpion doesn't have a cancellable stranding Low or
          Overhead. If you're the one attacking,{" "}
          <em>start simple - mid or throw.</em>
        </p>

        <p>
          <strong>F3</strong> is the basis of a healthy offense out of a Mid.
        </p>

        <p>
          <strong>F32</strong> is your <em>best launcher</em> and{" "}
          <em>optimal combo starter</em>. It's <em>+61 on hit</em> with a jump
          cancel, and <strong>can be chained up to 3 times</strong> for a
          juggle. But, the second attack is High, so an educated opponent can
          easily punish it. Caution is advised.
        </p>

        <p>
          <strong>F34</strong> is the safe Mid-Mid that estabpshes respect. The
          same educated opponent from above, expecting to counter a{" "}
          <strong>F32</strong> or a <strong>Throw</strong> is now discouraged to
          do so.
        </p>

        <p>
          <strong>F3 &rarr; Throw</strong> is your mix-up for foes that keep
          blocking.
        </p>

        <p>
          In due course, only checking with Mid will feel limited, so add{" "}
          <strong>Standing 1</strong>. Start with a full <strong>122</strong>{" "}
          (final hit is an Overhead), then stagger:
        </p>

        <ul>
          <li>
            <strong>1 &rarr; 1</strong> if you can hit the 2 frame window.
          </li>

          <li>
            <strong>1/12 &rarr; block/throw/D1</strong>
          </li>

          <li>
            <strong>1 &rarr; back dash &rarr; 2</strong>
          </li>
        </ul>

        <p>
          Your opponent becomes unsure weather you'll continue, throw, or
          disengage. Don't automatically feel safe because you're +2 on block.
          Mix it up.
        </p>
      </section>

      <section>
        <h2 id="convert">Convert almost any clean hit</h2>
        <p>
          <strong>Train hit confirmation first</strong>. Only then think about
          combos. At that point,{" "}
          <strong>go for consistency, not max damage</strong>. There are many
          routes. You only need to learn 3 or 4.
        </p>
        <p>
          The Spear is limited to one per combo, thus you have{" "}
          <em>early and late Spear routes</em>.
        </p>

        <h3 id="early">Most conversions will be Spear early</h3>

        <p>
          It's simply easier to start out of <strong>12</strong>,{" "}
          <strong>21</strong>, <strong>F3</strong>, or <strong>B2</strong>{" "}
          anti-air, into Spear. They are all replaceable starters depending on
          the situation. Scorpion has a straightforward combo progression.
        </p>

        <p>
          <strong>12/21/F3/B2 &rarr; BF1 &rarr; 333 &rarr; BF2</strong>{" "}
          <em>(217 DMG)</em> is a beginner's combo that completes the basic
          hit-confirm into Spear route. <strong>333 BF2</strong> ender is simple
          and switches sides. It can be replaced with <strong>33 DB2</strong> to
          knockdown next to you, but for less damage.
        </p>

        <p>
          <strong>
            12/21/F3/B2 &rarr; BF1 &rarr; F32 &rarr; F32 &rarr; F32 &rarr; 4
            &rarr; BF2
          </strong>{" "}
          <em>(318 DMG)</em>. Juggling with <strong>F32</strong> paves the way
          forward.
        </p>

        <p>
          <strong>
            12/21/F3/B2 &rarr; BF1 &rarr; F32 &rarr; F32 &rarr; F32 &rarr; F34
            &rarr; BF2
          </strong>{" "}
          <em>(342 DMG)</em> is your{" "}
          <em>optimal meterless bread-n-butter route.</em> It's all you need to
          be consistent in online matches.
        </p>
      </section>
    </>
  );
}
