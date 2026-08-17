import Image from "next/image";

import { getPage } from "@/app/siteMap";
import FightScreen from "../../../public/mk/fight.webp";
import Spacing from "../../../public/mk/spacing.webp";

const neutralPage = getPage("/mortal-kombat/neutral");

export const metadata = neutralPage.metadata;

export default function Page() {
  return (
    <>
      <h1>{neutralPage.title}</h1>

      <section>
        <p>
          <em>Neutral</em> refers to a state of the round where:
        </p>

        <ul>
          <li>
            No one is currently being hit, blocking an attack, knocked down, or
            otherwise forced into a specific response;
          </li>
          <li>
            Both players are free to move, attack, defend, or execute their game
            plan.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="goal">The goal is to further your position</h2>

        <p>
          <strong>Every round begins in neutral.</strong> It also traspires
          whenever pressure ends and enough distance for independent action is
          created.
        </p>

        <Image
          className="mx-auto"
          src={FightScreen}
          alt="The fight screen when the round starts."
        />

        <p>
          During neutral, both players try to land an attack, force the opponent
          to block, drive them toward the corner, or get a read on their
          tendencies. All while avoiding unnecessary risk. How can we do this?
        </p>

        <h3 id="advantage">One player may still have an advantage</h3>
        <p>
          The term neutral describes the freedom to act, not the overall balance
          of the round. A fighter may still have more health, more resources
          (meter, Kameo), or better position.
        </p>
      </section>

      <section>
        <h2 id="spacing">Spacing is controlling which attacks reach</h2>

        <p>
          Every attack controls a particular area of the screen, formed by its
          reach and block type. Changing the distance between fighters also
          changes which attacks may connect.
        </p>

        <Image
          className="mx-auto"
          src={Spacing}
          alt="Kung Lao throws his hat at Sub-Zero who can't reach him with his kick."
        />

        <p className="example">
          For example, moving futher away from the opponent makes jabs and kicks
          futile, leaving only things like projectiles, teleports, and other
          long-range tools.
        </p>

        <p>
          <strong>
            <em>Spacing</em> is simply controling the space between players so
            you limit which attacks are threatening at a given time.
          </strong>
        </p>

        <p>
          The space between the fighter when a round starts is called the{" "}
          <em>default distance</em> and it's around one forward jump away (jump
          distance).
        </p>
      </section>

      <section>
        <h2 id="footsies">Footsies is the mind game around spacing</h2>

        <p>
          <em>Footsies</em> is not a particular move or distance, but the whole
          process of controlling the distance between characters. It involves
          provoking a response with things like:
        </p>

        <ul>
          <li>
            Staying just outside the range of most of the opponent’s attacks;
          </li>
          <li>Staying far enough to react to a projectile;</li>
          <li>Moving in and out of attack range;</li>
          <li>
            Moving close enough to threaten an approach without committing to
            it.
          </li>
        </ul>

        <p>
          Footsies is about controlling the screen via movement, timing, and
          anticipation. Successful footsies requires knowledge of the
          character's tools and ranges.
        </p>
      </section>

      <section>
        <h2 id="closing-in">Closing in without commitment</h2>

        <p>
          Every time you approach the opponent, you declare intent to begin your
          offense up close. It doesn't necessarily demand commitment. You can
          simply move forward or dash in a way which still allows you to stop,
          block, or retreat.
        </p>

        <p>
          Even if no attack is thrown, simply motivating your foe to back up to
          the corner, or testing his reactions is worthwhile. Approaches can be
          supported by projectiles, jumps, teleports, special dashes,
          invisibility, Kameos (MK1), etc.
        </p>

        <p>
          Closing in predicatbly, <em>will be checked</em> by a poke. So,
          alternate movement with attacks and patience.
        </p>
      </section>

      <section>
        <h2 id="zoning">Zoning from outside their effective range</h2>

        <p>
          All characters have ways to engage in hand-to-hand combat, but not all
          have decent moves at range. If distance favours you, you may want to
          keep away from your opponent.
        </p>

        <p>
          <em>Zoning</em> is the deliberate use of long-range attacks,
          projectiles, and backward movement to control the screen and
          discourage your foe from advancing. In effect this threatens damage
          while preventing them from reaching the distance they preffer to fight
          in.
        </p>

        <p className="example">
          For example, Liu Kang traditionally has fast fireballs that can be
          paced to prevent melee-heavy characters like Baraka from closing in.
        </p>

        <p>
          Same as with everything, zoning in a predictable manner{" "}
          <em>will be challenged</em> by a jump, teleport, or a long-range
          counterattack.
        </p>

        <p className="example">
          For example, Raiden, Scorpion and Kung Lao all have teleports designed
          to surprise expected long-range attacks. Sub-Zero's famous slide can
          advance under most high projectiles.
        </p>

        <p>
          Also, retreating has the cost of limiting your options when
          approaching the corner, thus it has to be balanced. Effective zoning
          is a <strong>limited technique to provoke impatience</strong>. A
          patient opponent will break long streaks of projectiles.
        </p>
      </section>

      <section>
        <h2 id="pokes">Pokes check the opponent</h2>

        <p>
          A <em>poke</em> is any low commitment attack, that is quick and safe
          enough to:
        </p>

        <ul>
          <li>interrupt the opponent's advancing;</li>
          <li>remind the opponent to check their movement;</li>
          <li>pre-emptively challenge predictable moves;</li>
          <li>counterattack unsafe attacks.</li>
        </ul>
      </section>

      <section>
        <h2 id="whiff">Whiffs and punishments</h2>

        <p>
          Any attack that misses completely is a <em>whiff</em>. During the
          attack’s recovery, the attacker cannot immediately block, thus hitting
          them before that recovery ends is called a <em>whiff punish</em>.
        </p>

        <p>
          Because of the short time window to punish a recovering whiff, you
          need to be close enough and have a fast enough counterattack. The more
          unsafe the attack is, the easier it isto punish.
        </p>
      </section>

      <section>
        <h2 id="bait">Baiting whiffs</h2>

        <p>
          <em>Baiting</em> means encouraging the opponent to make a whiff.
        </p>
      </section>
    </>
  );
}
