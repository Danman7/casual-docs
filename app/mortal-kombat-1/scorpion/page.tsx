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
          loading="eager"
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
          His moves are mostly direct, having something for every root scenario,
          making him a <strong>safe choice for beginners</strong>. A guide for
          Scorpion can be a guide for the game's basics. That being said, he can
          be seen in high-level matches as well. His kit is modular enough for
          him to work with any Kameo.
        </p>
      </section>

      <section>
        <h2 id="tools">Main tools</h2>
        <h3 id="normals">Normals</h3>
        <p>
          <strong>[1]</strong> is the short and fast, 7-frame,{" "}
          <strong>+2 on block</strong>, High. It's not enough for proper frame
          traps, but good for staggers and quick checks.
        </p>
        <p>
          <strong>[1,2]</strong> safely hit-confirms <strong>[1]</strong> into a
          special cancel.
        </p>
        <p>
          <strong>[1,2,2]</strong> ends in an Overhead, handling a crouching
          defense, and baiting an up-block. The last point creates good stagger
          opportunities: <strong>[1,2,2]</strong> once or twice, then{" "}
          <strong>[1 &rarr; Throw / D1 / Backdash &rarr; 2]</strong>.
        </p>
        <hr />
        <p>
          <strong>[2]</strong> is a 10-frame, -2 on block, <em>disjointed</em>{" "}
          High, that <strong>reaches a few steps away</strong>. That's very
          practical for whiff-punishment and checking approaching foes, making
          it a <strong>key neutral resource</strong>.
        </p>
        <p>
          <strong>[2,1]</strong> continues into a Mid, reaching further and
          dealing more damage than <strong>[1,2]</strong>, for a{" "}
          <strong>principal hit-confirm</strong> into a Spear.
        </p>
        <hr />
        <p>
          <strong>[B+2]</strong>'s 9-frame start, 0 on block, and excellent
          upwards reach, form the <strong>prime anti-air</strong> move. It can't
          be jump cancelled on hit, but it shortcut cancels into any B,F special
          without pressing back a second time: <strong>[B+2 &rarr; F+1]</strong>
          . This gives it superb conversion out of a failed jump-in.
        </p>
        <p>
          <strong>[F+4]</strong> launches higher, with an actual jump cancel,
          but is much slower, less safe, and less practical.
        </p>
        <hr />
        <p>
          <strong>[F+3]</strong> is a safe, 12-frame, -3 on block,{" "}
          <em>advancing</em> Mid, that checks crouching foes and is also the
          foundation of Scorpions offense.
        </p>
        <p>
          <strong>[F+3,2]</strong> rewards with +61 on hit and a jump cancel -
          Scorpion's <strong>best launcher</strong> and{" "}
          <strong>optimal combo starter</strong> damage-wise. It's final High
          hit can be ducked under, however, making it possible for a skilled
          opponent to counter.
        </p>
        <p>
          <strong>[F+3,4]</strong> commands <strong>respect</strong> instead, by
          ending on a -6 on block Mid, discouraging any crouching shenanigans
          under <strong>[F+3]</strong>.
        </p>
        <hr />
        <p>
          <strong>[B+3]</strong> manifests quite uniquely. Scorpion launches his
          Kunai <strong>very far</strong> (around default distance + 1 backdash)
          for a slow, 21-frame, two-hit, Mid-Low. The first Mid hit is shortcut{" "}
          <em>cancellable</em> into any special, same as <strong>[B+2]</strong>,
          e.g. <strong>[B+3 &rarr; F+1]</strong>. The reach and 17 active frames
          establish it as a <strong>space control</strong> move, but the -17 on
          block demands some spacing.
        </p>
        <p>
          It's a move designed to keep your opponent uncomfortable at long
          range. Scorpion doesn't have a slide like Sub or Noob, so other
          players rarely expect a Low from afar. Getting hit a few times,
          conditions them to preemptively low block, or jump which can work well
          with <strong>[B+2]</strong>, but requires a good read.
        </p>
        <h3 id="specials">Specials</h3>

        <p>
          <strong>[B,F+1]</strong> - the signature Scorpion{" "}
          <strong>Spear</strong> - is a projectile that stuns the opponent on
          hit and restands them next to you.{" "}
          <em>A second spear within the same combo drops them instead.</em>{" "}
          Being -28 on block requires needs distance, but it being High and the
          70-frame recovery make it{" "}
          <strong>
            easy to duck and slide under, jump over or teleport around
          </strong>{" "}
          for a free punish.
        </p>

        <p>
          The Spear is <strong>not a zoning tool</strong>, and should not be
          spammed or used predictably. Instead it works wonderfully as a{" "}
          <strong>whiff-punish</strong> after a good read, or a combo extension
          after a successful hit confirm.
        </p>

        <p>
          <strong>[B,F+1 EX]</strong> hits Mid instead, surprising players that
          like to duck under the Spear, but the meter cost often might not be
          justified.
        </p>

        <hr />

        <p>
          <strong>[D,B+3]</strong> - the other signature move - the{" "}
          <strong>Flame-Port</strong> - teleports Scorpion to the other side of
          the target, hitting them with a High on arrival. It's an{" "}
          <strong>occasional anti-zoning</strong> tool, but its 26-frame start
          and -21 on block make it dangerous to use. Players tend to expect it
          and punish it relentlessly.
        </p>

        <p>
          The enhanced <strong>[D,B+3 EX]</strong> however, is something else.
          With its instant <strong>1-frame</strong> start, it skips the attack
          on arrival, making it safe, opeing the door for all sorts of{" "}
          <strong>mind games</strong>:{" "}
          <strong>Port &rarr; Throw / D1 / Microduck &rarr; 1</strong>.
        </p>
      </section>

      <section>
        <h2 id="react">Reactive play rewards patience</h2>

        <ul>
          <li>
            <strong>2,1</strong> &rarr; they block &rarr; you block, duck, or
            disengage
          </li>

          <li>
            <strong>2,1</strong> &rarr; they get hit &rarr; <strong>BF1</strong>{" "}
            Spear &rarr; combo
          </li>
        </ul>
      </section>

      <section>
        <h2 id="offense">A staggered offense</h2>

        <p>
          Successful aggression is about keeping the other player guessing.
          Without a standing Overhead or Low cancel on his own, Scorpion's
          offense is a bit narrow.
        </p>

        <p>
          <em>Hit or throw</em> is the basic mix-up. Mids are the safest hits.
          Hence, <strong>F+3</strong> is the natural basis.
        </p>

        <p>
          <strong>F+3,2</strong> is your <strong>best launcher</strong> and{" "}
          <strong>optimal combo starter</strong> damage-wise. It starts faster
          and provides better advantage on hit than <strong>F+4</strong>. It
          also can be <strong>repeated up to 3 times</strong> for a juggle. An
          issue is the second hit, which is a High, and can be countered from a
          crouch.
        </p>

        <p>
          <strong>F+3,4</strong> ends with a knockback Mid instead. It can't be
          cancelled, but <strong>establishes respect</strong>, discouraging
          crouching counters.
        </p>

        <p>
          Respect for <strong>F+3,2</strong> and <strong>F+3,4</strong> opens
          the door for <strong>F+3</strong> staggers:{" "}
          <strong>F+3 &rarr; Throw / D+1 / backdash</strong>.
        </p>

        <p>
          Of course, only probing with <strong>F+3</strong> is limited.{" "}
          <strong>1,2,2</strong> ends with an Overhead, bating an up block. It
          also starts faster and adds additional staggers. <strong>1</strong>'s
          +2 on block is not enough for a proper frame trap, yet it can spice up
          the mix if you're already close:
        </p>
      </section>

      <section>
        <h2 id="combos">Convert almost any whiff</h2>

        <p>Scorpion can always combo out of the following:</p>

        <ul>
          <li>
            <strong>1,2</strong> is fast and short;
          </li>

          <li>
            <strong>2,1</strong> is optimal from 2-3 steps away;
          </li>

          <li>
            <strong>F+3</strong> is just a bit slower and shorter, but hits Mid
            and can launch with <strong>F+3,2</strong>;
          </li>

          <li>
            <strong>B+3</strong> can surprise from far away, but's it's slow and
            unsafe;
          </li>

          <li>
            <strong>B+2</strong> can interupt jump-ins, but{" "}
            <strong>it counts as a juggle</strong>, thus 3x{" "}
            <strong>F+3,2</strong> will not work.
          </li>
        </ul>

        <p>
          <strong>2,1</strong> has the balance between reach, speed and damage.
          From there you only really need 3-4 routes.{" "}
          <strong>Go for consisteny, not max damage.</strong>
        </p>

        <p>
          <strong>Starter &rarr; B,F+1 &rarr; 3,3,3 &rarr; B,F+2</strong>
          <br />
          <em>217-227 DMG</em>
          <br /> A painless, basic route just to get you started.
        </p>

        <p>
          <strong>
            Starter &rarr; B,F+1 &rarr; (F3,2)<sup>x3</sup> &rarr; F3,4 &rarr;
            B,F+2
          </strong>
          <br />
          <em>332-349 DMG</em>
          <br /> A meterless bread-n-butter (BnB) variation, that leans on the
          three juggles for simplicity. You will have enough height after the
          third launch for the <strong>F3,4</strong> and the ending Charge is a
          simple sequence to end on.
        </p>

        <p>
          One effective way to extend via meter is the enhanced air Kyo Snag.
          Practice{" "}
          <strong>F3,2 &rarr; jump &rarr; air 1,2 &rarr; air D,B+2 EX</strong>.
          Then try the following.
        </p>

        <p>
          <strong>
            Starter &rarr; B,F+1 &rarr; (F3,2)<sup>x2</sup> &rarr; jump &rarr;
            air 1,2 &rarr; air D,B+2 EX &rarr; delayed air 1,1,1 &rarr; air
            D,B+2
          </strong>
          <br />
          <em>367-385 DMG, 1 bar</em>
          <br />
          This is how the BnB from above can be given an extra bite. Three
          juggles will never provide the heigh to combo in the air. It's two
          juggles into the jump. The <strong>delayed air 1,1,1</strong> has to
          be executed close to the ground, for the opponent to bounce into the
          final not enahced <strong>D,B+2</strong>.
        </p>

        <p>
          <strong>
            Starter &rarr; B,F+1 &rarr; (F3,2)<sup>x2</sup> &rarr; jump &rarr;
            air 1,2 &rarr; (air D,B+2 EX &rarr; air 4)<sup>x3</sup> &rarr; BF2
          </strong>
          <br /> <em>407-417 DMG, 3 bars</em>
          <br />
          An end-of-the-round only method of abusing the air extension into
          30-40 more damage. The repetition is simple, but the timing is tight
          and having no resource afterwards is risky.
        </p>

        <p>
          All the routes above are <strong>Starter &rarr; Spear</strong>,
          because that is the most consistent, straightforward way to start a
          combo with Scorpion. But if you manage to catch a whiff with the
          launcher instead, and hold on the Spear for later, you can do more
          damage.
        </p>

        <p>
          <strong>
            (F3,2)<sup>x3</sup> &rarr; 4 &rarr; B,F+1 &rarr; 3,3 &rarr; D,B+2
          </strong>
          <br />
          <em>365 DMG</em>
          <br />
          Straight juggles into a kick into a Spear. Here a{" "}
          <strong>3,3,3</strong> will not produce enough height for a Charge.
          Same for the following route. So you end with two kicks into a Twisted
          Kyo. This is your <em>late Spear BnB</em>.
        </p>

        <p>
          <strong>
            (F3,2)<sup>x2</sup> &rarr; jump &rarr; air 1,2 &rarr; air D,B+2 EX
            &rarr; delayed air 1,1,1 &rarr; land &rarr; B,F+1 &rarr; 3,3 &rarr;
            DB2
          </strong>
          <br />
          <em>407 DMG, 1 bar</em>
          <br />
          You can use air extension in much the same manner as the other combos
          above. But if you didn't use up your Spear early, you can do the
          close-to-the-ground <strong>1,1,1</strong>, land, and throw one
          afterwards. You can press <strong>B,F+1</strong> even before landing
          and it should execute.
        </p>

        <p>
          <strong>air 1,2 &rarr; B,F+1 &rarr; </strong>
          <br />
          <em>354 DMG</em>
          <br />
          An air-to-air route.
        </p>
      </section>

      <section>
        <h2 id="kameos">Mix-ups, throw and armor combos with Kameos</h2>

        <p>
          Scorpion can work with mostly any Kameo. Here are just a few
          suggestions. You should explore futher.
        </p>

        <p>
          <strong>Mavado</strong> is a good all-around buff for Scorpion. Most
          of his moves activate only at the right time, making his a safe
          beginner's choice.
        </p>

        <ul>
          <li>
            Knockback (respect) strings like <strong>F3,4</strong> and{" "}
            <strong>2,1,4</strong> become combo starters with{" "}
            <strong>FK</strong> -{" "}
            <strong>
              F3,4 &rarr; FK &rarr; F3,2 &rarr; 4 &rarr; BF1 &rarr; 3,3 &rarr;
              DB2
            </strong>{" "}
            for <em>332 DMG</em>.
          </li>

          <li>
            Access to Throw combos -{" "}
            <strong>
              Throw &rarr; delayed K &rarr; (F3,2)<sup>x2</sup> &rarr; 4 &rarr;
              BF1 &rarr; 3,3 &rarr; DB2
            </strong>{" "}
            <em>220 DMG</em>
          </li>
        </ul>
      </section>
    </>
  );
}
