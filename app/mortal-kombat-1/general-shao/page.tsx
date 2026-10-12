import { getPage } from "@/app/siteMap";
import Image from "next/image";

import Shao from "../../../public/mk1/shao.webp";

const generalShaoPage = getPage("/mortal-kombat-1/general-shao");

export const metadata = generalShaoPage.metadata;

export default function Page() {
  return (
    <>
      <h1>{generalShaoPage.title}</h1>

      <section>
        <Image
          loading="eager"
          src={Shao}
          alt="Scorpion in Mortal Kombat 1"
          className="max-w-1/3 ml-4 float-right"
        />

        <p>
          General Shao is a{" "}
          <strong>
            heavy close-to-mid range hitter, built around two stances
          </strong>
          . With his Axe, he has outstanding reach, punishing whiffs with ease.
          Without the Axe, he trades reach for pressure and mix-ups, staying
          ahead even when blocked.
        </p>

        <p>
          <strong>
            He wins space with the Axe, confirms a hit, then temporarily plants
            it in the ground to get close and personal.
          </strong>{" "}
          Knowing which stance you are in and where the planted axe lies is key.
        </p>

        <p>
          With such hand-to-hand versatility, he is naturally{" "}
          <strong>finite at longer ranges</strong>. His only full-screen special
          is slow and unsafe.
        </p>
      </section>

      <section>
        <h2 id="axe">Axe stance lets them miss at your range</h2>

        <p>
          <strong>[2], [2,2] is peak neutral material</strong>. [2] is an
          exceptional, long-reaching 8f 0 <em>disjointed</em> High, that can be
          continued into a -7 Mid for a hit-confirm into a combo. A staggering,
          safe blend of range and speed, but without a good follow-up if
          blocked.
        </p>

        <p>
          <strong>[B+1], [B+1,2]:</strong> A 14f -7 <em>disjointed</em> Mid with
          a -6 Overhead end for when they like to crouch under [2].
        </p>

        <p>
          <strong>[B+2]:</strong> A 26f +3 (-7 flawless) advancing{" "}
          <em>disjointed</em> Mid <strong>launcher</strong>, that can be
          repeaded twice. Its slow start can be countered with a fast attack at
          close range.
        </p>

        <p>
          <strong>[F+4]</strong> is a 20f -6 advancing Mid for closing small
          gaps.
        </p>

        <p>
          <strong>[B+4]</strong> is an 11f -3 Low for checking their feet
          without committing to the slower [B+2].
        </p>

        <p>
          Shao has enough safe-ish tools for checking his opponents. If they
          block something, move back to your range.{" "}
          <strong>Don't stick to their face with the Axe on.</strong>
        </p>

        <ul>
          <li>They miss a few steps away &rarr; [2,2] &rarr; combo</li>
          <li>They block [2,2] &rarr; you block &rarr; move back</li>
          <li>They duck &rarr; check with [B+1]</li>
          <li>They wait &rarr; take space with movement, [F+4], or [B+2]</li>
        </ul>

        <p>
          <strong>[1,2]</strong> is the short-n-quick 7f High punish for when
          your block catches an unsafe attack.
        </p>

        <p>
          <strong>[F+2]</strong> is a 20f -32 Overhead, while{" "}
          <strong>[F+2,1+3]</strong> ends in a -15 <em>command grab</em>. Both
          invite a punish. Build your offense around spacing and confirmed hits
          before adding this risk.
        </p>
      </section>

      <section>
        <h2 id="stance-transition">Turn the opening into No Axe</h2>

        <p>
          <strong>[D,F+4] Power Strike</strong> is a{" "}
          <strong>28f overhead</strong> that plants the axe and changes your
          moves. It is -10 on block; the enhanced version is 0. Enter No Axe
          during a combo when possible. Cancelling into Power Strike on block
          can leave an interruptible gap, and an Up Block can punish it.
        </p>

        <p>
          <strong>[EX D,B+3] Devastator &rarr; [D,F+4]</strong> is the main
          one-bar bridge from an Axe [2,2] hit into a launch and No Axe.
          Devastator is a <strong>10f High, -25</strong>. Confirm the hit before
          spending the bar; a blocked attempt can cost you a full combo.
        </p>

        <p>
          <strong>[D,F+1] Dark Energy</strong> temporarily strengthens Axe
          attacks. Use a long knockdown or a Kameo freeze to make time for it.
          It has 45 frames of recovery, so activating it in front of an active
          opponent gives them an opening. Take the extra damage when you have
          time, then return to your spacing game.
        </p>
      </section>

      <section>
        <h2 id="no-axe">No Axe stance: make them defend up close</h2>

        <p>
          <strong>Move closer once the axe is down.</strong> Your attacks lose
          the Axe&apos;s reach, but gain better speed and advantage. The core
          threat is an overhead launcher paired with a fast Low.
        </p>

        <p>
          <strong>[F+2]:</strong> A <strong>16f overhead launcher, -6</strong>.
          It punishes crouch-blocking with a full combo. This is much less risky
          than Axe [F+2] on regular block, though a predictable overhead still
          invites an Up Block.
        </p>

        <p>
          <strong>[B+4]:</strong> A <strong>10f Low, +3</strong>. It catches
          standing defenders and leaves you ahead even if they crouch-block. It
          does not launch by itself. Use it to make them defend Low, then choose
          an overhead, a Mid, or a throw as they hesitate.
        </p>

        <p>
          <strong>[B+2]</strong> becomes a <strong>15f Mid launcher, +3</strong>
          , keeping the opponent in front. <strong>[B+1]</strong> becomes a{" "}
          <strong>12f Mid launcher, -4</strong>, flipping them over Shao to
          switch sides. Use [B+2] to keep the corner; use [B+1] to escape it or
          bring them back toward the axe.
        </p>

        <p>
          <strong>[2], [2,2], [2,2,4]:</strong> Your main pressure string. The
          first hit is a <strong>10f High at +1</strong>; the second ends at 0,
          and the full string ends at <strong>+2</strong>. Occasionally stop
          early to make them guess when to respond. This is a <em>stagger</em>:
          varying where a string ends to create hesitation.
        </p>

        <ul>
          <li>They crouch-block &rarr; [F+2] overhead &rarr; combo.</li>
          <li>
            They stand-block &rarr; [B+4] Low &rarr; assess their response.
          </li>
          <li>They keep blocking &rarr; stop a string early &rarr; throw.</li>
          <li>
            They attack after [2,2,4] &rarr; check with [D+1], if it reaches.
          </li>
        </ul>

        <p>
          <strong>Plus frames give you a head start.</strong> They do not make
          every follow-up unavoidable. After a blocked [B+4], your 16f [F+2] can
          still lose to a fast poke that reaches. Pushback may make that poke
          miss instead. Test the spacing against the opponent&apos;s character
          before repeating the sequence.
        </p>

        <p>
          <strong>[B+3]</strong> remains a <strong>20f Low, -6</strong>, with a
          special cancel for a combo route. It is slower than [B+4] and needs a
          suitable conversion. Start with [F+2], [B+4], and [2,2,4] before
          adding more layers.
        </p>
      </section>

      <section>
        <h2 id="planted-axe">Keep the fight near the planted axe</h2>

        <p>
          <strong>The axe&apos;s position changes your options.</strong> Near
          it, [D,F+1] becomes <strong>Treechopper</strong>, a{" "}
          <strong>23f Mid, +3</strong> that picks up the axe. The enhanced
          version adds armor. Both leave you back in Axe stance, so choose your
          next attack from that moveset. A Flawless Block makes them -7.
        </p>

        <p>
          <strong>[D,F+2] Reverse Treechopper</strong> is an{" "}
          <strong>11f command grab</strong> near the axe: a special throw that
          beats blocking but can miss a ducking or jumping opponent. It also
          returns the axe. Hold Back during it to switch sides, useful for
          putting the opponent in the corner. Use it as a combo ender when
          damage matters more than staying in No Axe.
        </p>

        <p>
          Your ordinary armored reversals are less reliable. Axe{" "}
          <strong>[EX D,B+3]</strong> is a <strong>High at -25</strong>; No Axe{" "}
          <strong>[EX D,B+3] Klassic Kahn</strong> is an{" "}
          <strong>11f High at -24</strong>. Low attacks can pass underneath
          them. Armor helps absorb a hit, but does not make the attack safe.
          Near the axe, enhanced Treechopper gives you an armored Mid instead.
        </p>

        <p>
          <strong>[D,B+4]</strong> is a <strong>40f Low</strong>: Death Quake
          with the Axe, Axe Quake without it. The planted axe can add an
          overhead hit when the opponent is near it. Treat this as a setup to
          learn later. The slow startup and vulnerability to jumps make repeated
          Quakes a poor answer to projectile pressure.
        </p>

        <p>
          No Axe is temporary. <strong>[D,F+4] Axe Recall</strong> also brings
          the axe back manually, while Treechopper and Reverse Treechopper
          return it through an attack. Before pressing your next button, check
          whether Shao is holding it again.
        </p>
      </section>

      <section>
        <h2 id="combos">Start with a few reusable combos</h2>

        <p>
          EX means enhance the special with Block, spending one bar. Below,{" "}
          <strong>~ means cancel</strong> into the next move;{" "}
          <strong>&rarr; means follow up</strong> after recovering. Practise
          each route from both sides. Choose the ending for axe position and the
          stance you want afterward.
        </p>

        <p>
          <strong>Axe hit &rarr; stay in No Axe</strong>
          <br />
          [2,2 ~ EX D,B+3 ~ D,F+4 &rarr; D,B+3 &rarr; 2,2 ~ D,B+3]
        </p>

        <p>
          <strong>Axe hit &rarr; regain the axe</strong>
          <br />
          [2,2 ~ EX D,B+3 ~ D,F+4 &rarr; 2,2 ~ D,F+2]
        </p>

        <p>
          <strong>Axe launcher &rarr; simple meterless damage</strong>
          <br />
          [B+2 &rarr; 2,2 ~ D,B+3]
        </p>

        <p>
          <strong>No Axe overhead &rarr; meterless combo</strong>
          <br />
          [F+2 &rarr; 2 ~ D,B+3 &rarr; 2,2 ~ D,B+3]
        </p>

        <p>
          Learn the Axe [2,2] conversion first. It turns the button you use in
          neutral into your close offense. Once consistent, extend Axe [B+2]
          with [jump &rarr; air 1,2 &rarr; land &rarr; 2,2] before Devastator
          for more damage and corner carry.
        </p>
      </section>

      <section>
        <h2 id="kameo">Sub-Zero is a practical first Kameo</h2>

        <p>
          <strong>[F+K] Iced Out</strong>, where K is the Kameo button, freezes
          the opponent after an Axe [2,2] hit. This gives you time to buff the
          axe and continue with [B+2]. It builds on Shao&apos;s main confirm
          instead of adding another opening to learn.
        </p>

        <p>
          <strong>Freeze &rarr; buff &rarr; launch &rarr; plant the axe</strong>
          <br />
          [2,2 ~ F+K &rarr; D,F+1 &rarr; B+2 &rarr; jump &rarr; air 1,2 &rarr;
          land &rarr; 2,2 ~ EX D,B+3 ~ D,F+4]
        </p>

        <p>
          <strong>[K] Arctic Armor</strong> protects against projectiles,
          helping you approach a zoning opponent. Activate it, advance while
          blocking between dashes, and look for [2] range. Learn Freeze for
          conversions and Armor for approaching before adding more Kameo setups.
        </p>
      </section>
    </>
  );
}
