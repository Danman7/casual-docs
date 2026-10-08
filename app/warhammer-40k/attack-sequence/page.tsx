import { getPage } from "@/app/siteMap";
import { Table } from "@/app/ui/Table";
import { woundRollColumns, woundRollRows } from "@/app/warhammer-40k/constants";

import { BsFillDice6Fill } from "react-icons/bs";
import { GiBolterGun, GiHumanTarget } from "react-icons/gi";

const attackSequencePage = getPage("/warhammer-40k/attack-sequence");

export const metadata = attackSequencePage.metadata;

export default async function Page() {
  return (
    <>
      <h1>{attackSequencePage.title}</h1>

      <section>
        <p>
          After you select weapons and targets, resolve each attack to find out
          whether it damages the target. The same sequence works for shooting
          and melee.
        </p>
      </section>

      <section>
        <h2 id="compare">Weapons test different parts of a target</h2>

        <p>
          A weapon must first hit, then wound, then beat the target&apos;s save.
          Its <strong>Strength, Armour Penetration and Damage</strong> matter at
          different points in that process.
        </p>

        <div className="flex justify-between">
          <div>
            <div className="font-bold">
              Weapon <GiBolterGun />
            </div>
            <div>Strength (S)</div>
            <div>Armour Penetration (AP)</div>
            <div>Damage (D)</div>
          </div>

          <div>
            <div>&nbsp;</div>
            <div>&harr;</div>
            <div>&harr;</div>
            <div>&harr;</div>
          </div>

          <div>
            <div className="font-bold">
              Target <GiHumanTarget />
            </div>
            <div>Toughness (T)</div>
            <div>Saves (Sv and InSv)</div>
            <div>Wounds (W)</div>
          </div>
        </div>
      </section>

      <section>
        <h2 id="sequence">Every attack follows four steps</h2>

        <ol>
          <li>
            Roll to hit <BsFillDice6Fill />
          </li>
          <li>
            Roll to wound <BsFillDice6Fill />
          </li>
          <li>
            Roll saves <BsFillDice6Fill />
          </li>
          <li>Inflict damage</li>
        </ol>

        <p>
          An attack stops as soon as it fails a step or inflicts damage. When
          several identical dice are rolled in a step, roll them together.
        </p>

        <h3 id="hit-roll">1. Roll to hit</h3>

        <p>
          Roll a D6 <BsFillDice6Fill /> for each attack. An unmodified 1 always
          fails. An unmodified 6 is a <strong>critical hit</strong> - it can
          trigger additional rules. Any other result{" "}
          <strong>
            hits if it equals or exceeds the weapon&apos;s BS or WS
          </strong>
          .
        </p>

        <h3 id="wound-roll">2. Roll to wound</h3>

        <p>
          Roll a D6 <BsFillDice6Fill /> for every hit. An unmodified 1 always
          fails, and an unmodified 6 is a <strong>critical wound</strong>. Other
          results wound when they meet the required result below.
        </p>

        <Table columns={woundRollColumns} data={woundRollRows} />

        <h3 id="save-roll">3. Roll saves</h3>

        <p>
          The defender first groups the target unit&apos;s models by their
          Wounds, Save and Invulnerable Save characteristics. Each CHARACTER
          model is its own group. They then declare the order in which those
          groups will receive attacks.
        </p>

        <p>
          A non-CHARACTER group that already contains a wounded model must come
          first. Non-CHARACTER groups come before CHARACTER groups, and wounded
          CHARACTER groups come before unwounded CHARACTER groups. This is why{" "}
          <strong>damage normally stays on a wounded model</strong> instead of
          being spread around the unit.
        </p>

        <p>
          After declaring that order, roll a D6 <BsFillDice6Fill /> for every
          wound. Do not apply AP or decide whether a save succeeds yet. That
          happens as the results are resolved in the next step.
        </p>

        <p>
          <strong>The allocation order sets the target.</strong> The first group
          in the declared order is the <strong>current allocation group</strong>
          . Once every model in it is destroyed, the next group becomes current.
        </p>

        <h3 id="damage">4. Inflict damage</h3>

        <p>
          Resolve save results from lowest to highest. For each result, select a
          model in the current allocation group, choosing a wounded model if
          possible. <strong>An unmodified 1 always inflicts damage.</strong>
        </p>

        <p>
          Otherwise, an Invulnerable Save succeeds if the result meets the
          group&apos;s InSv. If it does not, apply the weapon&apos;s AP to the
          result and compare it with the group&apos;s Sv. A successful save
          stops the attack. A failed save makes the selected model lose wounds
          equal to the weapon&apos;s Damage.
        </p>

        <p>
          <strong>When a model reaches 0 wounds, it is destroyed.</strong> If
          the whole target unit is destroyed, any remaining attacks are lost.{" "}
          <strong>
            Excess damage from one attack does not carry over to another model.
          </strong>
        </p>

        <h3 id="preventing-damage">
          Feel No Pain is an additional gate that some models possess
        </h3>

        <p>
          A Feel No Pain X+ ability is resolved while the damage is being
          resolved, after an attack has inflicted damage. You roll a D6{" "}
          <BsFillDice6Fill />. If the result is higher than X+, damage is
          prevented.
        </p>
      </section>

      <section>
        <h2 id="fast-dice">Roll identical attacks together</h2>

        <p>
          When attacks have the same profiles and target, roll all of their hit
          and wound rolls together. The defender then makes the save rolls
          together before resolving the results from lowest to highest.
        </p>

        <blockquote>
          For example, five identical attacks make five hit rolls. If three hit,
          make three wound rolls. If two wound, make two save rolls, then
          resolve the lower save result first.
        </blockquote>
      </section>

      <section>
        <h2 id="probability">A simple way to read attacks</h2>

        <p>
          An attack must hit and wound, then the target must fail its save,
          before it can deal damage. This is why{" "}
          <strong>
            a weapon&apos;s profile matters as a whole, rather than individual
            attributes
          </strong>
          . High Strength helps it wound, AP makes armour saves harder, and
          Damage determines how many wounds a failed save costs.
        </p>

        <h3 id="volume">More attacks make results more consistent</h3>

        <p>
          A single powerful attack can miss or fail to wound. More attacks give
          you more chances to pass each step, so they usually produce a more
          reliable result.
        </p>

        <h3 id="big-damage">Damage must match the target</h3>

        <p>
          High Damage is most useful when it matches a model&apos;s Wounds.{" "}
          <strong>
            Damage beyond the wounds needed to destroy one model is lost
          </strong>
          , so a D2 weapon is efficient against W2 models but wasteful against
          W1 models.
        </p>

        <h3 id="skip-gates">Some rules change or skip a step</h3>

        <p>
          Weapon abilities can change the normal sequence. For example, Torrent
          attacks automatically hit, while critical hits and wounds can trigger
          other abilities. Read the weapon&apos;s rules before resolving its
          dice.
        </p>
      </section>
    </>
  );
}
