import { getPage } from "@/app/siteMap";

import Link from "next/link";
import { BsFillDice6Fill } from "react-icons/bs";
import { ImDice } from "react-icons/im";

const battleRoundPage = getPage("/warhammer-40k/battle-round");
const attackSequencePage = getPage("/warhammer-40k/attack-sequence");

export const metadata = battleRoundPage.metadata;

export default async function Page() {
  return (
    <>
      <h1>{battleRoundPage.title}</h1>

      <section>
        <p>
          WH40k is a turn-based game. The battle round is{" "}
          <strong>the clock the game runs on</strong>. It gives each player a
          turn, with a clear place for <strong>what happens when</strong>.
        </p>

        <p>
          Most missions are limited to five rounds, but the mission decides how
          many rounds and which player goes first. That same player takes the
          first turn in every round. The next player follows. After every player
          has taken a turn, the round ends, and the next one begins.
        </p>

        <ul>
          <li>
            Rules that trigger at the start or end of the round execute before
            the first player's or after the last player's turn.
          </li>

          <li>
            Rules that trigger at the start or end of a player's turn execute
            before the first step or after the last step of that player's turn.
          </li>

          <li>Some rules do the same for specific turn phases.</li>
        </ul>
      </section>

      <section>
        <h2 id="turn">Each player takes their turn in phases</h2>

        <ol>
          <li>Command phase</li>
          <li>Movement phase</li>
          <li>Shooting phase</li>
          <li>Charge phase</li>
          <li>Fight phase</li>
        </ol>
      </section>

      <section>
        <h2 id="command-phase" className="flex-center">
          1. Command Phase - refresh resources and check morale
        </h2>

        <ol>
          <li>
            Both players gain 1 Command Point (CP), the resource used for
            Stratagems.
          </li>

          <li>Resolve the active player&apos;s Battle-shock tests.</li>

          <li>Resolve other Command-phase abilities.</li>
        </ol>

        <h3 id="half-strength">
          A unit must take a Battle-shock test if it's at or below half-strength
        </h3>

        <ul>
          <li>
            A <strong>one-model unit</strong> is at half-strength when it has{" "}
            <strong>half of its Wounds remaining</strong>.
          </li>

          <li>
            A <strong>unit with two or more models</strong> is at half-strength
            when its{" "}
            <strong>
              remaining models are half of its starting models count
            </strong>
            .
          </li>
        </ul>

        <p>
          An attached unit uses the number of models it had at the start of the
          first battle round. This is why a leader that survives after its
          bodyguard is destroyed can still count as below half-strength.
        </p>

        <p>A unit that was already Battle-shocked also tests in this step.</p>

        <h3 id="battle-shock-test">Making a Battle-shock test</h3>

        <ol>
          <li>
            Roll 2D6 <ImDice /> for the unit.
          </li>

          <li>
            Compare the result with the unit&apos;s best Leadership (Ld)
            characteristic. A result equal to or higher than that value passes.
          </li>

          <li>
            On a failure, the unit becomes{" "}
            <strong>
              Battle-shocked - it cannot be tarteted by Stratagems, looses it's
              Objective Control (OC) characteristic, and the ability to start or
              end actions
            </strong>
            .
          </li>
        </ol>
      </section>

      <section>
        <h2 id="movement-phase" className="flex-center">
          2. Movement Phase - relocate or stay put
        </h2>

        <p>
          Select <em>every unit</em> in your army, one at a time, and choose a
          move it is eligible to make. <em>Engagement</em> determines
          eligibility. The{" "}
          <strong>
            engagement range is 2&quot; horizontally and 5&quot; vertically
          </strong>
          . Units with no models in that range of an enemy are{" "}
          <em>unengaged</em>.
        </p>

        <h3 id="unengaged">Unengaged units move freely</h3>

        <ul>
          <li>
            A <strong>Normal Move</strong> lets a unit move up to its Move (M)
            characteristic.
          </li>

          <li>
            To <strong>Advance</strong> instead, roll a D6 <BsFillDice6Fill />{" "}
            and add the result to M. The unit moves further, but cannot declare
            a charge or shoot that turn, unless wielding an ASSAULT weapon.
          </li>
        </ul>

        <p>
          It's best to move models one at a time. They can travel in a straight
          line and rotate as they go, but the total distance cannot exceed the
          maximum. Rotating a model doesn't use movement.{" "}
          <em>All moves must end unengaged.</em>
        </p>

        <p>
          If every model in a unit is within 3" of a TRANSPORT, that unit may
          also <strong>Embark</strong> withing that Transport the same turn.
        </p>

        <h3 id="engaged">Engaged units can fall back</h3>

        <p>
          A <em>Fall Back</em> is a <em>Normal Move</em> for engaged units. The
          unit can retreat up to its M, but it must end unengaged and cannot
          declare an action that turn.
        </p>

        <p>
          If the unit is <em>not Battle-shocked</em> it makes an{" "}
          <strong>Ordered Retreat</strong>, doing a Battle-shock test
          afterwards.
        </p>

        <p>
          If the unit <em>is Battle-shocked</em> it makes a{" "}
          <strong>Desperate Escape</strong>. Roll a D6 <BsFillDice6Fill /> for
          each model. On a 1 or 2, that model suffers a Mortal Wound.
        </p>

        <h3 id="all">Any unit may skip movement</h3>

        <p>
          If it does, it counts as <strong>remained stationary</strong>. It
          doesn't move or rotate. Some rules trigger bonuses for units that
          remained stationary.
        </p>
      </section>

      <section>
        <h2 id="shooting-phase" className="flex-center">
          3. Shooting Phase - resolve ranged attacks
        </h2>

        <p>
          Select any unit that has at least one ranged weapon. It may shoot once
          this phase. It's not required for all units to shoot.{" "}
          <strong>
            Weapon availability is determined by visibility, reach, engagement
            and advancing
          </strong>
          .
        </p>

        <ul>
          <li>Unengaged units that didn't advance may shoot normally.</li>
          <li>Units that did advance may only shoot with ASSAULT weapons.</li>
          <li>
            Engaged units that din't advace may also shoot with PISTOL and
            CLOSE-QUARTER weapons.
          </li>
        </ul>

        <ol>
          <li>
            For each model, choose one or more ranged weapons to use. A model
            does not have to use every ranged weapon it has.
          </li>

          <li>
            Choose a target for each weapon. Unless a rule says otherwise, it{" "}
            <strong>must be visible, within range, and unengaged</strong>.
          </li>

          <li>
            Resolve the attacks using the{" "}
            <Link href={attackSequencePage.href}>attack sequence</Link>.
          </li>
        </ol>

        <p>
          <strong>
            Declare your weapons and targets clearly before rolling.
          </strong>{" "}
          You can split weapons between eligible targets.
        </p>
      </section>

      <section>
        <h2 id="charge-phase" className="flex-center">
          4. Charge Phase - rush into melee
        </h2>

        <p>
          Choose units to charge the enemy one at a time. A unit can declare a
          charge only if it is{" "}
          <strong>
            unengaged, within 12&quot; of an enemy, and did not Advance or Fall
            Back that turn
          </strong>
          .
        </p>

        <ol>
          <li>Choose an eligible unit and declare its charge.</li>

          <li>
            Roll 2D6 <ImDice />. The result is the maximum distance for its
            charge move.
          </li>

          <li>
            Select one or more charge targets within 12&quot; and within that
            maximum distance.
          </li>

          <li>
            If possible, move the unit so it ends engaged with every chosen
            charge target and no other enemy unit. Otherwise, it does not move.
          </li>
        </ol>

        <p>
          A unit that completes a charge gains <em>Fights First</em> until the
          end of the turn, making charge distance and target selection
          important.
        </p>
      </section>

      <section>
        <h2 id="fight-phase" className="flex-center">
          5. Fight Phase - resolve melee attacks
        </h2>

        <ol>
          <li>
            <strong>Pile In</strong> (optional): the active player moves their
            eligible units first, followed by their opponent. Each move is up to
            3&quot; and must obey its selected targets and engagement
            restrictions.
          </li>

          <li>
            <strong>Fight</strong>: players alternate selecting eligible units.
            The active player begins the sequence. Units with{" "}
            <em>Fights First</em> are selected before other eligible units.
          </li>

          <li>
            <strong>Consolidate</strong> (optional): the active player again
            moves eligible units first, then their opponent. Each move is up to
            3&quot;, using the applicable ongoing, engaging, or objective
            consolidation mode.
          </li>
        </ol>

        <p>
          Pile In and Consolidate mean that positioning can change before and
          after the attacks, rather than only when a single unit activates.
        </p>

        <p>
          Once the Fight phase and end-of-turn rules are complete, the other
          player takes their turn. After both turns, resolve the battle
          round&apos;s end rules and begin the next battle round if the mission
          continues.
        </p>
      </section>
    </>
  );
}
