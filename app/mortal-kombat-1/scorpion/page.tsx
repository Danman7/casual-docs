import { getPage } from "@/app/siteMap";
import { Badge } from "@/app/ui/Badge";
import Image from "next/image";
import Link from "next/link";
import { CgArrowLongRightR } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { FaHandPointRight, FaStar, FaTurnUp } from "react-icons/fa6";
import { GiArrowDunk, GiSpearHook } from "react-icons/gi";
import { MdCallSplit } from "react-icons/md";
import { RiArrowGoForwardFill } from "react-icons/ri";
import { RxRulerHorizontal } from "react-icons/rx";
import { TbArrowsSplit } from "react-icons/tb";
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
          His moves are mostly direct, having something for every basic
          scenario, making him a <strong>safe choice for beginners</strong>. A
          guide for Scorpion can be a guide for the game's basics. That being
          said, he can be seen in high-level matches as well. His kit is modular
          enough for him to work with any Kameo.
        </p>
      </section>

      <section>
        <h2 id="reactive">
          Plays well reactively <RiArrowGoForwardFill />
        </h2>

        <p>
          Scorpion has sufficient moves to convert almost any mistake into a
          combo. Just <strong>don't glue yourself to your opponent</strong>. He
          plays more coherently by staying a few steps away.
        </p>

        <p>
          <Badge isPrimary>
            <FaHandPointRight /> Main poke
          </Badge>{" "}
          <strong>Standing 2</strong> is a 10-frame, disjointed <em>High</em>{" "}
          with <strong>good reach</strong> for its speed. Learn its range, then
          keep Scorpion at the edge of it, and check foes as they come in.
        </p>

        <p>
          <Badge>
            <FaCheck /> Main hit-confirm
          </Badge>{" "}
          <strong>2,1</strong> is the safe <em>Mid</em> continuation. If you're
          going for damage, not probing, the routine is the following:
        </p>
        <ul>
          <li>
            <strong>2,1</strong> &rarr; they block &rarr; you block, duck, or
            disengage
          </li>

          <li>
            <strong>2,1</strong> &rarr; they get hit &rarr; <strong>BF1</strong>{" "}
            <GiSpearHook /> Spear &rarr; combo
          </li>
        </ul>

        <p>
          <Badge isPrimary>
            <FaTurnUp /> Main anti-air
          </Badge>{" "}
          <strong>Back 2</strong> is a 9-frame, disjointed <em>High</em>, with a
          fair hitbox, that also makes Scorpion micro-duck. It much quicker and
          safer as an anti-air than <strong>Forward 4</strong>. If they get hit,
          you can immediattely connect a <GiSpearHook /> Spear, by just pressing{" "}
          <strong>F1</strong> as it shortcut cancels:{" "}
          <strong>B2 &rarr; F1</strong>.
        </p>

        <p>
          <Badge isPrimary>
            <TbArrowsSplit />
            Advancing Mid
          </Badge>{" "}
          <strong>Forward 3</strong> is a safe, advancing, 12-frame Mid. It's a
          bit slower and shorter than <strong>Standing 2</strong>, but checks
          ducking foes, and is one basis of your offense.
        </p>
      </section>

      <section>
        <h2 id="spear">
          The Spear is not a zoning tool <GiSpearHook />
        </h2>

        <p>
          Scorpion's signature Spear <strong>BF1</strong> is an unsafe,
          17-frame, full-screen, High projectile, which stuns the target on hit
          and restands them next to you. It's one of the simples combo
          extensions in the game.{" "}
          <em>
            A second spear in the same combo will knock them down instead.
          </em>
        </p>

        <p>
          It controls a lot of space, but can easily be ducked under, jumped
          over or teleported around. Using it predictably will not end well.
          Employ it, primarily, inside a combo or try to catch them mid-step. It
          works great when it intercepts a dash, jump, or unsafe cast. You can
          try to provoke a reaction by throwing a quick punch into empty air
          from afar, into a spear: <strong>1 &rarr; BF1</strong>.
        </p>
      </section>

      <section>
        <h2 id="distance">
          No gap is safe <RxRulerHorizontal />
        </h2>

        <p>
          Scorpion has tools for players that like to keep their distance,{" "}
          <strong>provided they are used with restraint</strong>.
        </p>

        <p>
          <Badge>
            <CgArrowLongRightR />
            Long Tech
          </Badge>{" "}
          <strong>Back 3</strong> a pretty unique, disjointed, slow and unsafe
          2-hit, Mid-Low, where the first hit is cancellable into any special.
          It's <strong>terrible on paper, but reaches very far</strong>, and
          says active for long.
        </p>

        <p>
          Unfamiliar players, don't expect Scorpion to throw a <em>Low</em> at
          such a distance, and thend to start jumping or low-blocking
          preemptively. The former works well with <strong>B2</strong> if they
          develop a trend.
        </p>
      </section>

      <section>
        <h2 id="offense">
          A staggered offense <MdCallSplit />
        </h2>

        <p>
          On his own, Scorpion{" "}
          <strong>
            doesn't have a cancellable stranding <em>Low</em> or{" "}
            <em>Overhead</em>
          </strong>
          . Without a Kameo he employs a traditional hit/throw mixup.
        </p>

        <p>
          Simple is consistent - Mid, or throw, or complete. <strong>F3</strong>{" "}
          is the foundation.
        </p>

        <p>
          <Badge isPrimary>
            <GiArrowDunk />
            Main launcher
          </Badge>{" "}
          <strong>F3,2</strong> is a <em>+61 on hit</em> string with a jump
          cancel, that <strong>can be chained up to 3 times</strong> in a row
          for a juggle. It's your <em>optimal combo starter</em> damage-wise,
          but the second attack is High. An educated opponent can punish it with
          a Low counter.
        </p>

        <p>
          <Badge>
            <FaStar /> Respect
          </Badge>{" "}
          <strong>F3,4</strong> a Mid-Mid instead, discouraging any Lows, and
          conditioning the opponent to keep blocking.
        </p>

        <p>
          After some regard has been established, you can start staggering{" "}
          <strong>F3</strong> into a thorw, or a <strong>D1</strong>, or
          something else. The <em>key idea</em> is to keep the other player
          guessing are you going to throw, or complete the string, or delay.
        </p>

        <h3 id="standing-1">Plus-frames pressure</h3>

        <p>In due course, only checking with Mid will become limited.</p>

        <p>
          <Badge>
            <FaHandPointRight /> Quick poke
          </Badge>{" "}
          <strong>Standing 1</strong> is a 7-frame, +2 on hit, High jab.
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
