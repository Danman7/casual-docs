import { FaCrosshairs } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { RiSwordLine } from "react-icons/ri";
import { RxDoubleArrowUp } from "react-icons/rx";
import { TbArrowBigUpLines } from "react-icons/tb";

import { getPage } from "@/app/siteMap";

import { BsFillDice6Fill } from "react-icons/bs";

const battleRoundPage = getPage("/warhammer-40k/battle-round");

export const metadata = battleRoundPage.metadata;

export default async function Page() {
  return (
    <>
      <h1>{battleRoundPage.title}</h1>

      <section>
        <p>
          Most WH40K games take the shape of a one versus one. Chances are your
          first game will be the same. Games are divided into rounds.
        </p>

        <p>
          During a round, each player takes a turn. Turns are split into five
          phases - each telling you which actions can happen now.
        </p>

        <ol>
          <li>Command phase</li>
          <li>Movement phase</li>
          <li>Shooting phase</li>
          <li>Charge phase</li>
          <li>Fight phase</li>
        </ol>

        <p>
          During your turn, you go trough all the phases, then you pass the turn
          to your opponent. After they do the same, the round is over.
        </p>

        <p>
          Most games end after a fixed number of rounds, usually 5, so the round
          structure is the basic clock of the game.
        </p>

        <p className="lead">Phase sequence</p>
      </section>

      <section>
        <h2 id="command-phase" className="flex-center">
          1. Command Phase <LuCrown />
        </h2>

        <p>
          Your turn starts by refreshing resources, resolving any rules that
          trigger now, and checking whether damaged units lose control.
        </p>

        <ol>
          <li>
            All players gain 1 command point (CP). CP is the resource spent to
            activate <em>Stratagems</em>.
          </li>

          <li>
            Resolve any rules that occur in the Command Phase but don't specify
            a precise timing.
          </li>

          <li>
            Settle <em>Battle-shock</em> tests if any are required.
          </li>
        </ol>

        <h3 id="battle-shock-tests">Battle-shock tests</h3>

        <p>
          Battle-shock is the morale check for units that have taken serious
          losses. First, check if you have{" "}
          <strong>units below half-strength</strong>. Those units{" "}
          <strong>must take a battle-shock test</strong>. Below half-strength
          means:
        </p>

        <ul>
          <li>
            It's a <strong>single model</strong> (e.g. a character, monster, or
            vehicle) that{" "}
            <strong>has less than half its Wounds (W) left</strong>.
          </li>

          <li>
            It's a <strong>squad</strong> that{" "}
            <strong>has fewer than half of its models left</strong>.
          </li>
        </ul>

        <p>
          If a character is attached to a squad, use the total number of models
          in that combined unit. Once the escorting squad is destroyed, the
          character goes back to checking its remaining wounds.
        </p>

        <ol>
          <li>
            Roll 2D6 <BsFillDice6Fill /> for the unit.
          </li>

          <li>
            Check if the result is equal to or higher than the unit's best{" "}
            Leadership (Ld) .
          </li>

          <li>
            On fail, the unit is <strong>Battle-shocked</strong> until the start
            of your next Command Phase:{" "}
            <strong>
              Objective Control (OC) becomes 0 and cannot be affected by
              Stratagems
            </strong>
            .
          </li>
        </ol>

        <p className="example">
          For example, if a 5-man squad of Intercessors is down to 2 models
          (2/5), it is below half-strength and must test. Its Ld is 6+, so a
          roll of 5 fails.
        </p>

        <p className="example">
          If the same squad has a Chaplain attached, it is at 3/6 models and
          does not need to test yet. If it later has to test, a roll of 5 would
          pass because the Chaplain has Ld5+. This is why leaders matter for
          morale.
        </p>

        <p className="example">
          If the Chaplain is alone, it checks wounds instead. Because it starts
          with 4 wounds, it tests only after dropping to 1 wound.
        </p>

        <p>
          The important part is that Battle-shock{" "}
          <strong>shuts down scoring and support</strong>. Even if one player
          controls the objectives, the other player can turn the round by
          forcing enough damaged units to test.
        </p>
      </section>

      <section>
        <h2 id="movement-phase" className="flex-center">
          2. Movement phase <TbArrowBigUpLines />
        </h2>

        <p>
          Movement is where your turn starts to create threats. Every unit
          outside melee can reposition. Melee range is called{" "}
          <em>engagement range</em>, which means 1" of an enemy model. A unit
          outside engagement range can either:
        </p>

        <ul>
          <li>
            Declare a <strong>normal move</strong> and go any distance up to its{" "}
            Move (M) characteristic in inches.
          </li>

          <li>
            Declare an <strong>advance</strong>, roll a die, and move further.
            The unit then becomes <strong>unable to charge this turn</strong>{" "}
            and can shoot only with weapons that have the Assault keyword.
          </li>
        </ul>

        <p className="lead">Advance roll</p>
        <ol>
          <li>
            Roll a D6 <BsFillDice6Fill />.
          </li>

          <li>
            Add the result to the unit's M and move up to that total distance
            instead.
          </li>
        </ol>

        <p className="example">
          For example, the bulky Heavy Intercessors can make a normal move up to
          5". If they declare an advance and roll a 6, they can{" "}
          <strong>move up to 11"</strong> instead. Because the{" "}
          <strong>Heavy bolt rifles have Assault</strong>, they may also shoot
          that turn.
        </p>

        <p>During both move types, units are not allowed to:</p>

        <ul>
          <li>Move through enemies.</li>
          <li>End a move within engagement range of an enemy.</li>
          <li>
            End a move on top of an objective under the core rules,{" "}
            <em>but tournaments usually allow this</em>.
          </li>
        </ul>

        <p>
          If a unit <strong>skips movement</strong>, it's considered to have{" "}
          <strong>remained stationary</strong>. Some rules, like the Heavy
          keyword, interact with units that remained stationary.
        </p>

        <h3 id="fall-back">Fall Back</h3>

        <p>
          Units that are already in engagement range cannot make normal moves.
          They can only{" "}
          <strong>
            either stay put, or declare a <em>fall back</em>
          </strong>{" "}
          move. Fall Back is like a normal move with these caveats:
        </p>

        <ul>
          <li>
            The unit cannot shoot or declare a charge the same turn (same as if
            it advanced).
          </li>

          <li>
            The unit <strong>can pass through enemies</strong>, but it must take
            a <em>Desperate Escape</em> test.
          </li>

          <li>
            Units that are falling back while <em>battle-shocked</em> always
            take a Desperate Escape test, even when not passing through enemies.
          </li>
        </ul>

        <p className="lead">Desperate Escape test</p>
        <ol>
          <li>
            Roll a D6 <BsFillDice6Fill /> for each model in the unit that is
            falling back.
          </li>

          <li>Result of 3 or above passes.</li>

          <li>On fail, the model is destroyed.</li>
        </ol>

        <h3 id="pivoting">Pivoting</h3>

        <p>
          Units are not restricted to moving in straight lines. They can change
          direction as long as they stay within the distance they can move.{" "}
          <strong>Vehicles and Monsters</strong> without round bases or the{" "}
          <em>Fly</em> keyword, however, must{" "}
          <strong>reduce their move by 2"</strong> every time they pivot, to
          prevent gaining extra distance through rotation tricks.
        </p>

        <h3 id="transports">Transports</h3>

        <p>
          Transports let infantry and characters trade freedom for protection
          and speed. Eligible units may{" "}
          <strong>
            embark onto units with the <em>Transport</em> keyword
          </strong>{" "}
          during the Movement Phase. Disembarking happens during a later
          Movement Phase.
        </p>

        <ul>
          <li>
            If they disembark before the transport has moved that turn, they can
            also move.
          </li>

          <li>
            If they disembark after the transport has already moved for the
            turn, they cannot move further.
          </li>
        </ul>

        <p className="lead">
          If the transport is destroyed while holding a unit
        </p>
        <ol>
          <li>
            Roll a D6 <BsFillDice6Fill /> for each embarked model.
          </li>

          <li>Result of 2 or above passes.</li>

          <li>
            On fail, the model suffers a mortal wound. Then the survivors
            disembark, become Battle-shocked, and cannot charge that turn.
          </li>
        </ol>

        <h3 id="strategic-reserves">Strategic Reserves</h3>

        <p>
          Players may hold up to{" "}
          <em>25% of their total army points as strategic reserves</em>. These
          units do not deploy at the start of the battle. Instead, they arrive
          later at the very end of the Movement Phase, following these rules:
        </p>

        <ul>
          <li>All units must deploy more than 9" from enemy units.</li>

          <li>
            Round 2: Within 6" of a table edge, not in the enemy deployment
            zone.
          </li>

          <li>Round 3+: Within 6" of any table edge.</li>
        </ul>

        <p>
          Reserve play is about timing and pressure. Late arrivals can threaten
          flanks and objectives, but they must still respect the enemy units
          already on the table.
        </p>
      </section>

      <section>
        <h2 id="shooting-phase" className="flex-center">
          3. Shooting phase <FaCrosshairs />
        </h2>

        <p>
          After movement, ranged units try to convert position into damage. A
          unit may declare ranged attacks if:
        </p>

        <ul>
          <li>It's not engaged in melee.</li>
          <li>
            It has at least one <em>ranged</em> weapon within range and line of
            sight of an enemy.
          </li>
        </ul>

        <p>
          The important part is to{" "}
          <strong>state which weapons fire at which targets</strong> before
          rolling. Use these rules to avoid disputes:
        </p>

        <ul>
          <li>
            A model can only fire either all <em>Pistols</em> or everything else
            it has.
          </li>

          <li>All attacks from the unit resolve simultaneously.</li>

          <li>All eligible weapons must fire.</li>

          <li>
            You may split fire by weapon. For example, two rifles can fire at
            one unit while the other three fire at another unit, but you cannot
            split individual shots.
          </li>
        </ul>

        <p>Attacks are resolved following the attack sequence.</p>

        <p className="lead">Is this your first shooting phase?</p>

        <ul>
          <li>
            Shoot with units that have fewer target options first, to make
            selecting a target easier and avoid wasting attacks.
          </li>

          <li>
            Is there an enemy within reach of multiple of your units? You can
            try to focus fire and remove them from play, which will simplify
            future target selection.
          </li>

          <li>
            Do you have Blast weapons? They are best against large groups of
            infantry. Hit with Blast first for the maximum number of attacks,
            then shoot the survivors down.
          </li>

          <li>
            Which Damage and AP profiles work best? If you can, use D1 weapons
            against single-wound targets and D2 weapons against W2 targets. Do
            not waste high AP on targets with poor saves or strong invulnerable
            saves.
          </li>
        </ul>
      </section>

      <section>
        <h2 id="charge-phase" className="flex-center">
          4. Charge phase <RxDoubleArrowUp />
        </h2>

        <p>
          After shooting, melee units try to turn distance into contact. This is
          the simplest phase. Units that did not advance this turn and are{" "}
          <strong>
            within 12" of an enemy may declare a charge against that enemy
          </strong>
          . The charge roll decides whether they reach.
        </p>

        <p className="lead">Charge roll</p>
        <ol>
          <li>Measure the distance to the target's closest model in inches.</li>

          <li>
            Roll 2D6 <BsFillDice6Fill />.
          </li>

          <li>Check if the result is enough to cover the distance.</li>

          <li>
            On success, move your unit within engagement range of the target.
          </li>

          <li>On fail, nothing happens.</li>
        </ol>

        <p>
          Melee units usually want the move + charge pattern. Advancing might
          add up to 6", but a normal move followed by a charge can add up to
          12". The lesson is to leave enough space so your forward units do not
          block the rest of your army.
        </p>
      </section>

      <section>
        <h2 id="fight-phase" className="flex-center">
          5. Fight phase <RiSwordLine />
        </h2>

        <p>
          Fight is where engaged units resolve hand-to-hand attacks.{" "}
          <strong>
            Units that charged this turn gain <em>Fights First</em>
          </strong>{" "}
          (some units have it natively). This phase alternates priority, and the
          non-active player gets the first pick in each priority group.
        </p>

        <p className="font-bold">Who fights when?</p>

        <ol>
          <li>The non-active player's units that have Fights First.</li>
          <li>The active player's units that have Fights First.</li>
          <li>All other eligible units controlled by the non-active player.</li>
          <li>All other eligible units controlled by the active player.</li>
        </ol>

        <p>When it's your turn to fight, the selected unit:</p>

        <ol>
          <li>Piles in - moves up to 3", ending within engagement range.</li>

          <li>
            Executes all attacks with melee weapons following the attack
            sequence.
          </li>

          <li>
            Consolidates - moves another 3" if there are models outside
            engagement range or if it can move within range of an objective.
          </li>
        </ol>

        <p>
          Pile-ins and consolidations are short moves, but they matter. They can
          jam enemy units, pull more models into combat, or steal objectives.
        </p>

        <p>
          Once the Fight Phase is complete, your turn ends and your opponent
          starts the same five-phase sequence.
        </p>
      </section>
    </>
  );
}
