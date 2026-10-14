import { getPage } from "@/app/siteMap";
import { Badge } from "@/app/ui/Badge";
import Image from "next/image";
import Link from "next/link";

import Intercessors from "../../../../public/wh40k/intercessor.webp";
import AssaultIntercessors from "../../../../public/wh40k/assault-intercessor.webp";

const unitsPage = getPage("/warhammer-40k/space-marines/units");
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
        <h2 id="intercessors">Assault Intercessor Squad</h2>
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
          <strong>Come with:</strong> Chainsword and Heavy Bolt Pistol
        </p>

        <p>
          <strong>
            Assault Intercessors are aggressive melee infantry clearers and
            counter-charge troops.
          </strong>
        </p>

        <p>
          <strong>They prefer to be the ones initiating combat.</strong> The
          chainsword delivers four [S5 AP−1 D1] attacks, but{" "}
          <em>Targeted Intercession</em> makes that [S6 AP−2] on a charge.
          Charging pushes the sword's profile from anti-GEQ to anti-MEQ. They
          can advance and charge once with <em>Assault Doctrine</em>, or fall
          back and charge with <em>Tactical Doctrine</em>.
        </p>

        <p>
          <strong>The Sergeant's equipment adds some punch.</strong>
        </p>
      </section>
    </>
  );
}
