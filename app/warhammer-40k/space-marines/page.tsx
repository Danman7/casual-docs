import { getPage } from "@/app/siteMap";
import Image from "next/image";
import Link from "next/link";
import SpaceMarine from "../../../public/wh40k/space-marine.webp";

const spaceMarinesPage = getPage("/warhammer-40k/space-marines");
const archetypesPage = getPage("/warhammer-40k/archetypes");
const roundPage = getPage("/warhammer-40k/battle-round");

export const metadata = spaceMarinesPage.metadata;

export default async function Page() {
  return (
    <>
      <h1>{spaceMarinesPage.title}</h1>

      <section>
        <Image
          loading="eager"
          src={SpaceMarine}
          alt="Scorpion in Mortal Kombat 1"
          className="max-w-1/3 ml-4 float-right"
        />

        <p>
          <strong>
            Space Marines are a pliant faction of durable units, built around
            coordinated attacks, and choosing the right moment to commit.
          </strong>{" "}
          Good if you enjoy combining shooting, melee, and movement, with ways
          to adapt during the battle.
        </p>

        <p>
          Straightforward units make them approachable. Coordinating them gives
          them depth.
        </p>

        <p>
          They are referred to by their formal latin name{" "}
          <em>Adeptus Astartes</em> on their datasheets. Sometimes just
          Astartes.
        </p>

        <h2 id="pros">One collection, many playstyles</h2>

        <p>
          <strong>Marines are a broad toolkit.</strong> They have ranged
          specialists, melee specialists, tanks, transports, infiltration, deep
          strike, and a lot of named characters.
        </p>

        <p>
          <strong>
            Regular squads are tough with a lot of objectives utility.
          </strong>{" "}
          Most units are at least T5{" "}
          <Link href={`${archetypesPage.href}#meq`}>MEQ</Link>, so they can hold
          objectives under fire. Intercessors can shoot and act at the same
          time, while Scouts can act after advancing or falling back. Scoring
          doesn't need to consume elite damage dealers.
        </p>

        <p>
          <strong>
            The faction's flexibility is visible in movement and weapons.
          </strong>{" "}
          Combat Doctrines help with reaching targets, repositioning while
          shooting, or escaping in time. Intercessors can choose between volume
          or strength. Specialists often have multiple loadouts for different
          targets.
        </p>
      </section>

      <section>
        <h2 id="cons">
          Accomplish enough with relatively few, expensive units
        </h2>

        <p>
          <strong>Loosing a squad matters.</strong> D2 AP weapons threaten
          carelessly exposed regular infantry. At the same time, using expensive
          troops for screening or minor tasks is unsustainable.
        </p>

        <p>
          <strong>Coordination and timing require planning.</strong> Spending a
          doctrine before several units can exploit it can be a major
          disadvantage. Also, specialists frequently need transport delivery to
          reach their objectives in time to make a difference.
        </p>

        <p>
          <strong>Many units overlap.</strong> Or they have an unclear role.
          Perhaps the result of being the "frontmen" of Warhammer 40,000, Space
          Marines' roster is large, but somewhat bloated.
        </p>
      </section>

      <section>
        <h2 id="doctrines">Doctrines are once-per-round action windows</h2>

        <p>
          As Space Marnes, at the start of your{" "}
          <Link href={`${roundPage.href}#command-phase`}>Command Phase</Link>{" "}
          you may select one combat doctrine which will be active untill your
          next Command Phase.
        </p>

        <ul>
          <li>
            <strong>Devastator:</strong> Ranged weapons gain [ASSAULT], so your
            army can advance without sacrificing shooting.
          </li>

          <li>
            <strong>Assault:</strong> Units can charge after advancing, so your
            melee line can commit from further away.
          </li>

          <li>
            <strong>Tactical:</strong> Shoot and charge after falling back, so
            units can escape a bad engagement, then counterattack.
          </li>
        </ul>

        <p>
          Planning movement and coordinating multiple units becomes central to
          the faction. Some detachments grant additional uses.
        </p>
      </section>

      <section>
        <h2 id="chapters">Forces are segmented in Chapters</h2>

        <ul>
          <li>
            <strong>A second faction keyword states the unit’s Chapter.</strong>{" "}
            For example, Roboute Guilliman is both [ADEPTUS ASTARTES] and
            [ULTRAMARINES].
          </li>

          <li>
            You cannot include units from more than one Chapter in your army.
          </li>
        </ul>

        <p>
          A unit without a chapter is a <em>base unit</em>. You may not choose a
          chapter and play only base units. But you always choose a detachment.
          Chapter and detachment work together.
        </p>

        <ul>
          <li>
            <strong>Chapter</strong> determines your exclusive units and
            characters. For example, taking Blood Angels units commits you to
            Blood Angels. You can’t mix in Ultramarines or Space Wolves.
          </li>
          <li>
            <strong>Detachment</strong> determines your army’s playstyle and
            bonuses. For example, Blood Angels can use a generic Marine
            detachment or one of their Chapter-specific ones.
          </li>
        </ul>
      </section>
    </>
  );
}
