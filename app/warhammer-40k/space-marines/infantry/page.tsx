import { getPage } from "@/app/siteMap";
import { Badge } from "@/app/ui/Badge";
import Image from "next/image";
import Link from "next/link";

import Intercessors from "../../../../public/wh40k/intercessor.webp";
import AssaultIntercessors from "../../../../public/wh40k/assault-intercessor.webp";
import HeavyIntercessors from "../../../../public/wh40k/heavy-intercessor.webp";

const unitsPage = getPage("/warhammer-40k/space-marines/infantry");
const archetypesPage = getPage("/warhammer-40k/archetypes");

export const metadata = unitsPage.metadata;

export default function Page() {
  return (
    <>
      <h1>{unitsPage.title}</h1>

      <section>
        <h2 id="intercessors">Intercessor Squad</h2>
        <Image
          loading="eager"
          src={Intercessors}
          alt="Intercessors in Warhammer 40K"
          className="side-img"
        />

        <div className="inlist">
          <Badge>INFANTRY</Badge>
          <Badge>BATTLELINE</Badge>
          <Badge>EXPLOSIVES</Badge>
          <Badge>IMPERIUM</Badge>
          <Badge>TACTICUS</Badge>
        </div>

        <p>
          <strong>Profile:</strong> M6"{" "}
          <Link href={`${archetypesPage.href}#meq`}>MEQ</Link> + OC2
        </p>

        <p>
          <strong>Composition:</strong> 1 Sergeant, 4-9 Intercessors
        </p>

        <p>
          <strong>Cost:</strong> 85/5 or 170/10
        </p>

        <p>
          <strong>Come with:</strong> Bolt Pistol, Bolt Rifle, and Knives and
          Fists
        </p>

        <p>
          <strong>Intercessors are general-purpose ranged infantry.</strong>{" "}
          They are supple enough to advance, defend, engage light infantry, and
          do objectives all together.
        </p>

        <p>
          <strong>
            Their primary role is flexible anti-infantry fire support.
          </strong>{" "}
          The Bolt Rifles [24" 3+ AP-1] [RAPID FIRE 1] have two firing modes:
          anti-<Link href={`${archetypesPage.href}#geq`}>GEQ</Link>{" "}
          <em>Saturation</em> [S5, D1] and anti-MEQ <em>Focused Fire</em> [S6,
          D2]. You also can, and should, attach one Grenade Launcher per 5
          Rifles for better reach against both hordes and tougher units.
        </p>

        <p>
          <strong>
            Their secondary role is objective control and mission utility.
          </strong>{" "}
          The <em>Tactical Mainstay</em> ability allows them to act even while
          engaged or Battle-shocked, and shoot while acting.{" "}
          <em>Bolter Discipline</em> grants +1 to hit (improves 3+ to 2+) if
          either the Intercessors or their target is on an objective. [RAPID
          FIRE 1] adds 1 attack at 12". They can fight on objectives and
          complete missions at the same time.
        </p>

        <p>
          A five-man Intercessor squad is never a bad idea, but first check if
          your army even needs general-purpose support.
        </p>
      </section>

      <section>
        <h2 id="assault-intercessors">Assault Intercessor Squad</h2>
        <Image
          src={AssaultIntercessors}
          alt="Assault Intercessors in Warhammer 40K"
          className="side-img"
        />

        <div className="inlist">
          <Badge>INFANTRY</Badge>
          <Badge>BATTLELINE</Badge>
          <Badge>EXPLOSIVES</Badge>
          <Badge>IMPERIUM</Badge>
          <Badge>TACTICUS</Badge>
        </div>

        <p>
          <strong>Profile:</strong> M6" MEQ + OC2
        </p>

        <p>
          <strong>Composition:</strong> 1 Sergeant, 4-9 Intercessors
        </p>

        <p>
          <strong>Cost:</strong> 85/5 or 170/10
        </p>

        <p>
          <strong>Come with:</strong> Chainsword and Heavy Bolt Pistol
        </p>

        <p>
          <strong>Assault Intercessors are a budget melee battleline.</strong>{" "}
          They can bully light infantry off objectives, but M6" makes them
          dependent on delivery. Jump Assaults have less OC and weaker charges
          but much better reach. Bladeguards are stronger, more durable melee.
          Chapters like Blood Angels and Space Wolves have their own melee
          specialists.
        </p>

        <p>
          <strong>They prefer to be the ones initiating combat.</strong> The
          chainsword delivers four [S6 AP−2 D1] attacks on a charge. But
          remaining engaged or receiving a charge uses their default [S5 AP−1]
          profile instead. They can advance and charge once with{" "}
          <em>Assault Doctrine</em>, or fall back and counter-charge with{" "}
          <em>Tactical Doctrine</em>.
        </p>

        <p>
          <strong>They also work as cheap bodyguards</strong>, as their charge
          bonus also applies to attached leaders. A Captain supplies Assault
          Doctrine for advance-and-charge. A Chaplain gives [LANCE] to all
          weapons, providing an even deadlier charge.
        </p>
      </section>

      <section>
        <h2 id="heavy-intercessors">Heavy Intercessor Squad</h2>
        <Image
          src={HeavyIntercessors}
          alt="Heavy Intercessors in Warhammer 40K"
          className="side-img"
        />

        <div className="inlist">
          <Badge>INFANTRY</Badge>
          <Badge>BATTLELINE</Badge>
          <Badge>EXPLOSIVES</Badge>
          <Badge>IMPERIUM</Badge>
          <Badge>GRAVIS</Badge>
        </div>

        <p>
          <strong>Profile:</strong> M5"{" "}
          <Link href={`${archetypesPage.href}#gravis`}>Gravis</Link> + OC2
        </p>

        <p>
          <strong>Composition:</strong> 1 Sergeant, 4-9 Intercessors
        </p>

        <p>
          <strong>Cost:</strong> 115/5 or 230/10
        </p>

        <p>
          <strong>Come with:</strong> Heavy Bolt Rifle, Bolt Pistol, and
          Ceramite Fists.
        </p>
        <p>
          <strong>
            Heavy Intercessors are slow, but durable objective contenders that
            can wear down infantry with ranged fire.
          </strong>{" "}
          They can affordably replace Terminators or Bladeguard when surviving
          close combat isn't paramount.
        </p>

        <p>
          <strong>
            The main idea is to reach and hold a midfield objective.
          </strong>{" "}
          Five Heavy Intercessors are 15 wounds and OC10. If you control the
          objective, they save on 2+ trough{" "}
          <em>Unyielding in the Face of the Foe</em>. Their melee is weak, but
          they can persistently hold ground while shooting.
        </p>

        <p>
          <strong>
            They can do fire support and screening off an objective too.
          </strong>{" "}
          The Heavy bolt rifle [30″ A2 S5 AP−1 D2] [HEAVY, RAPID FIRE 1] and
          Heavy bolter [36″ A3 S5 AP−1 D2] [HEAVY, RAPID FIRE, SUSTAINED HITS 1]
          handle MEQ from affar. Both hit on 2+ if stationary. Any approaching
          infantry will receive respectively 3 attacks at 15" and 5 attacks at
          18".
        </p>
      </section>
    </>
  );
}
