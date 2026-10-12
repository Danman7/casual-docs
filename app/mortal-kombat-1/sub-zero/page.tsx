import { getPage } from "@/app/siteMap";
import Image from "next/image";

import Sub from "../../../public/mk1/sub.webp";

const subZeroPage = getPage("/mortal-kombat-1/sub-zero");

export const metadata = subZeroPage.metadata;

export default function Page() {
  return (
    <>
      <h1>{subZeroPage.title}</h1>

      <section>
        <Image
          loading="eager"
          src={Sub}
          alt="Scorpion in Mortal Kombat 1"
          className="max-w-1/3 ml-4 float-right"
        />

        <p>
          Sub-Zero is a{" "}
          <strong>space-control character built around Ice Klone</strong>. His
          advancing attacks threaten the ground, while the Klone freezes
          opponents who touch it. Together, they make approaching him risky and
          help him push the fight toward the corner.
        </p>

        <p>
          <strong>
            Win space &rarr; confirm a hit &rarr; carry to the corner &rarr; set
            a trap.
          </strong>{" "}
          His reward is both the combo and the situation afterward. His
          projectile-negating tools also help against zoning, where an opponent
          uses projectiles to keep you at a distance.
        </p>

        <p>
          His safe strings establish respect, but his overhead launcher and many
          specials invite a full punish when blocked.{" "}
          <strong>Patience and placement matter.</strong> A Kameo makes his lows
          more rewarding and adds coverage for his setups.
        </p>
      </section>

      <section>
        <h2 id="neutral">Take space with advancing mids</h2>

        <p>
          <strong>[F+1], [F+1,2]:</strong> Your main approach and hit-confirm.
          [F+1] is a <strong>15f advancing Mid, -4 on block</strong>; the
          two-hit string ends at -7. A Mid hits an opponent who ducks without
          blocking. Walk near its reach, catch a missed attack, and use the
          second hit to recognize whether to cancel into a combo.
        </p>

        <p>
          Here, <strong>15f means 15 frames of startup</strong>; -4 on block
          means you recover four frames after the defender. A hit-confirm means
          recognizing a hit before committing to the next move.
        </p>

        <p>
          <strong>[2], [2,1]:</strong> A reaching{" "}
          <strong>10f High, 0 on block</strong>, followed by a Mid that ends at
          -5. Use it when the opponent is standing or recovering from a missed
          attack. They can duck the first hit, so return to [F+1] when they
          start doing that.
        </p>

        <p>
          <strong>[D+1]</strong> is your fast close check:{" "}
          <strong>7f, +11 on hit, -9 on block</strong>. [D+3] is a longer Low
          poke at 10f and +12 on hit; [D+4] is a 9f Low at +14. After a poke
          hits, immediately use [1,2] up close or [2,1] if it reaches. Their
          High starters can catch the opponent before they recover enough to
          duck. Practise the timing; a blocked poke calls for defense instead.
        </p>

        <p>
          <strong>[D+2]</strong> is an <strong>11f uppercut</strong> with good
          reach against jumps. Watch for the jump before committing. A grounded
          opponent can duck it and punish the recovery.
        </p>

        <ul>
          <li>They miss in front of you &rarr; [F+1,2] &rarr; combo.</li>
          <li>They block [F+1,2] &rarr; block or step back.</li>
          <li>They crowd you &rarr; [D+1] &rarr; follow up only on hit.</li>
          <li>They jump toward you &rarr; [D+2].</li>
        </ul>
      </section>

      <section>
        <h2 id="ice-klone">Ice Klone makes movement risky</h2>

        <p>
          <strong>[D,B+1] Ice Klone</strong> creates a temporary frozen copy of
          Sub-Zero. Put it between you and the opponent to threaten their
          approach. If they touch it and freeze, you have time to start a combo.
          If they retreat, take the space they give you.
        </p>

        <p>
          It starts in <strong>9f</strong>, but has{" "}
          <strong>44f recovery</strong> and is listed at -23 on block.{" "}
          <strong>A quick trap still leaves a long commitment.</strong>{" "}
          Cancelling a blocked string into Klone can be challenged, including
          with armor. Alternate the cancel with simply stopping and blocking to
          catch that response.
        </p>

        <p>
          The Klone can negate an incoming projectile, giving you room to wait
          behind it. It does not cover every attack or approach. Watch the
          opponent instead of immediately attacking after every Klone.
        </p>

        <p>
          <strong>[EX D,B+1]</strong> spends one bar on a longer-lasting Klone.
          Tapping Block after the regular Klone creates two additional Klones
          for one bar; enhancing both stages costs two. Learn the ordinary
          placement first. The{" "}
          <a href="https://www.mortalkombat.com/en-us/patch-notes">
            official patch notes
          </a>{" "}
          document the revised enhancement cost and later increases to Klone
          duration and repeat-freeze options.
        </p>
      </section>

      <section>
        <h2 id="pressure">Make them respect a low or a throw</h2>

        <p>
          <strong>[B+3,4]</strong> starts with a <strong>13f Low</strong> and
          ends with another Low at <strong>-5</strong>. It checks standing
          defense without Slide&apos;s risk. The full string needs a suitable
          Kameo to become a combo, so initially take the knockdown and position.
        </p>

        <p>
          <strong>[4], [4,4]:</strong> A <strong>12f High, +3 on block</strong>,
          followed by a Low ending at -1. Occasionally stop after [4] to vary
          your timing. This is a <em>stagger</em>: making the opponent hesitate
          by changing where a string ends. Its High starter can still be ducked,
          and plus frames only give you a head start on your next attack.
        </p>

        <p>
          <strong>[F+1,2,3]</strong> adds a Low ending at -7. [1,2,2] and
          [2,1,2] end overhead at -6 and -7. These endings check defensive
          habits, but their earlier hits give the opponent time to recognize the
          string. Do not treat them as an unavoidable guessing game.
        </p>

        <p>
          <strong>[B+2]</strong> is the big risk: a{" "}
          <strong>24f overhead launcher, -23</strong>. It beats crouch-blocking
          and starts a meterless combo, but a correct block costs you heavily.
          Start by using it after a freeze. Add it to pressure once the opponent
          fears your Low, throw, and Klone; a predictable overhead also invites
          an Up Block.
        </p>

        <ul>
          <li>They stand-block &rarr; [B+3,4] Low.</li>
          <li>They keep blocking &rarr; stop a string early &rarr; throw.</li>
          <li>They duck your High starters &rarr; [F+1] Mid.</li>
          <li>
            They armor your Klone cancel &rarr; stop &rarr; block and punish.
          </li>
        </ul>

        <p>
          <strong>A blocked [F+1,2] ends your turn.</strong> A later throw or
          stagger works because they hesitate. It is not guaranteed by the
          string&apos;s frame advantage.
        </p>
      </section>

      <section>
        <h2 id="counterzoning">Choose your answer to projectiles</h2>

        <p>
          <strong>[B,F+2] Ice Klone Charge</strong> is a{" "}
          <strong>20f Mid projectile</strong> that negates opposing projectiles
          and knocks down on hit. Unlike a High, it cannot be ducked without
          blocking. Use it to contest the space ahead of you; it does not reach
          indefinitely. It is -16 on block, so avoid using it as a close
          pressure ender.
        </p>

        <p>
          <strong>[D,F+1] Ice Ball</strong> is a <strong>39f High</strong> that
          freezes on hit. Its slow start makes trading with faster projectiles
          difficult. The one-bar enhanced version is still 39f, but becomes a
          Mid and destroys incoming projectiles. Spend the bar for a deliberate
          projectile read when you have room.
        </p>

        <p>
          <strong>[B,F+3] Ice Slide</strong> is a <strong>14f Low, -22</strong>.
          It travels far and can pass under some projectiles, but a blocked
          attempt gives the opponent a large punish. Use it for a clear read or
          a confirmed combo. The one-bar enhanced version has armor and remains
          -22; armor absorbs a hit without making the move safe.
        </p>

        <p>
          <strong>[air D,B+4] Diving Glacier</strong> changes your jump into a
          dive kick. It can catch a predictable projectile, but is listed at -16
          on block. Contact height and spacing affect the punish. Test the
          landing instead of assuming every dive kick lets you attack again.
        </p>
      </section>

      <section>
        <h2 id="combos">Turn a confirmed hit into corner carry</h2>

        <p>
          EX means enhance with Block, spending one bar in the routes below.
          <strong> ~ means cancel</strong> into the next move;{" "}
          <strong>&rarr; means follow up</strong> after recovering. Learn the
          same finish from a launcher and from a confirmed string.
        </p>

        <p>
          <strong>Overhead launcher &rarr; meterless finish</strong>
          <br />
          [B+2 &rarr; B+2 &rarr; jump &rarr; air 1,2 &rarr; land &rarr; F+1,2 ~
          B,F+3]
        </p>

        <p>
          <strong>Mid hit-confirm &rarr; one-bar freeze</strong>
          <br />
          [F+1,2 ~ EX D,F+4 &rarr; B+2 &rarr; B+2 &rarr; jump &rarr; air 1,2
          &rarr; land &rarr; F+1,2 ~ B,F+3]
        </p>

        <p>
          <strong>[D,F+4] Deadly Vapors</strong> slows the opponent; enhancing
          it gives the opening for your [B+2] conversion. It starts in 31f and
          is -20 on block. Confirm [F+1,2] before spending the bar. On block,
          stop instead of committing to the freeze.
        </p>

        <p>
          <strong>Hold 3 during Slide for its Spear follow-up.</strong> This
          completes the synchronized ending with the opponent in front of you.
          Without holding 3, Slide knocks them into the air, allowing suitable
          Kameo conversions. The{" "}
          <a href="https://www.mortalkombat.com/en-us/patch-notes">
            November 2024 patch notes
          </a>{" "}
          explain this change. Learn the held ending first for consistent
          position.
        </p>

        <p>
          Practise from both sides with random blocking.{" "}
          <strong>Hit &rarr; enhance Vapors. Block &rarr; defend.</strong>{" "}
          Recognizing the hit matters more than adding another extension.
        </p>
      </section>

      <section>
        <h2 id="setplay">Use the knockdown to prepare a trap</h2>

        <p>
          <strong>
            Setplay means preparing a trap for the opponent as they get up.
          </strong>{" "}
          After a knockdown, place a Klone while they recover, then threaten a
          Low, overhead, or throw as they stand up. Near the corner, they have
          less room to retreat around the trap.
        </p>

        <p>
          <strong>The setup depends on the ender and Klone position.</strong>A
          Slide knockdown does not automatically give a safe Klone. In practice,
          record the opponent using an armored wakeup attack and delaying their
          recovery. Check whether your placement covers those responses before
          repeating it in a match.
        </p>

        <ul>
          <li>
            They wait behind their guard &rarr; threaten [B+3] or a throw.
          </li>
          <li>
            They crouch-block &rarr; consider [B+2], with its punish risk.
          </li>
          <li>
            They wake up attacking &rarr; block &rarr; punish the recovery.
          </li>
          <li>They delay getting up &rarr; wait and adjust your timing.</li>
        </ul>

        <p>
          Choose a combo ending for the position it leaves. Once your simple
          routes are consistent, learn a corner Klone route that trades some
          immediate damage for a stronger next situation.
        </p>
      </section>

      <section>
        <h2 id="kameos">Add a Kameo that converts your lows</h2>

        <p>
          <strong>Sonya is a practical first partner.</strong> Her assists can
          convert [B+3,4] into a combo and extend air routes. This gives your
          safe Low a larger reward alongside the [F+1,2] freeze conversion.
          Learn the Low conversion first, then add projectile coverage.
        </p>

        <p>
          <strong>Goro</strong> also converts Low strings.{" "}
          <strong>Kung Lao</strong> adds Low Hat pressure alongside your
          overhead threats, while <strong>Cyrax</strong> and{" "}
          <strong>Frost</strong> support more elaborate corner traps. Each
          changes the timing and coverage of your offense; learn one team&apos;s
          setup before adding another.
        </p>

        <p>
          Start with three habits:{" "}
          <strong>
            stop after blocked [F+1,2], watch jumps, and place Klone with a
            purpose.
          </strong>{" "}
          Then add the one-bar conversion, [B+3,4] with Sonya, and a tested
          corner setup.
        </p>
      </section>

      <section>
        <h2 id="sources">Sources</h2>

        <p>
          Frame values come from the supplied <em>MK1 Character Frame Data</em>{" "}
          workbook; routing and strategy draw on the Sub-Zero overview and
          training guides. The{" "}
          <a href="https://www.mortalkombat.com/en-us/patch-notes">
            official patch history
          </a>{" "}
          covers the Klone and Slide changes. It also records Polar Palm and
          Permafrost Palm, added in March 2025, which are absent from the
          supplied sheet and outside this starting toolkit.
        </p>
      </section>
    </>
  );
}
