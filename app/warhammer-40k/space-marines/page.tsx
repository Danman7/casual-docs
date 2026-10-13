import { getPage } from "@/app/siteMap";
import SpaceMarine from "../../../public/wh40k/space-marine.webp";
import Image from "next/image";
import Link from "next/link";

const spaceMarinesPage = getPage("/warhammer-40k/space-marines");
const archetypesPage = getPage("/warhammer-40k/archetypes");

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
            Space Marines are an adaptable faction of elite units, built around
            coordinated attacks, and choosing the right moment to commit.
          </strong>
        </p>

        <p>
          They are sometimes referred to by their formal latin name{" "}
          <em>Adeptus Astartes</em> or just Astartes.
        </p>

        <h2 id="pros">One collection, many playstyles</h2>

        <p>
          <strong>Marines are a broad toolkit.</strong> They have ranged
          specialists, melee specialists, tanks, transports, infiltration, deep
          strike, and a lot of named characters. You can field most battlefield
          roles.
        </p>

        <p>
          <strong>
            Regular squads are durable with a lot of objectives utility.
          </strong>{" "}
          Most units are at least T5{" "}
          <Link href={`${archetypesPage.href}#meq`}>MEQ</Link> infantry, which
          helps with incoming fire while holding objectives. Intercessors can
          shoot and perform actions at the same time, while Scouts can start
          actions after advancing or falling back. Therefore scoring doesn't
          need to consume a key damage dealer.
        </p>

        <p>
          <strong>
            The faction's flexibility is supported both in movement and weapons.
          </strong>{" "}
          Combat Doctrines help with reaching targets, repositioning while
          shooting, or escaping in time. Intercessors choose between volume and
          strength. Specialists often have multiple loadouts for different
          targets.
        </p>
      </section>

      <section>
        <h2 id="cons">
          Accomplish enough with relatively few, expensive units
        </h2>

        <p>
          <strong>Loosing a squad matters.</strong> D2 AP weapons can punish
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
          Marines roster is indeed large, but somewhat bloated.
        </p>
      </section>
    </>
  );
}
