import { getPage } from "@/app/siteMap";
import { Badge } from "@/app/ui/Badge";
import Image from "next/image";
import Link from "next/link";

import Intercessors from "../../../../public/wh40k/intercessor.webp";
import AssaultIntercessors from "../../../../public/wh40k/assault-intercessor.webp";
import HeavyIntercessors from "../../../../public/wh40k/heavy-intercessor.webp";
import Eliminators from "../../../../public/wh40k/eliminators.webp";

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
          <strong>Profile:</strong>{" "}
          <Link href={`${archetypesPage.href}#meq`}>MEQ</Link> OC2&uarr;
        </p>

        <p>
          <strong>Composition:</strong> 1 Sergeant, 4-9 Intercessors
        </p>

        <p>
          <strong>Cost:</strong> 85/5 or 170/10
        </p>

        <p>
          <strong>Default loadout:</strong> Bolt Pistol, Bolt Rifle, and Knives
          and Fists
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
          <strong>Profile:</strong> MEQ OC2&uarr;
        </p>

        <p>
          <strong>Composition:</strong> 1 Sergeant, 4-9 Intercessors
        </p>

        <p>
          <strong>Cost:</strong> 85/5 or 170/10
        </p>

        <p>
          <strong>Default loadout:</strong> Chainsword and Heavy Bolt Pistol
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
          <strong>Profile:</strong>{" "}
          <Link href={`${archetypesPage.href}#gravis`}>Gravis</Link> M5"
          OC2&uarr;
        </p>

        <p>
          <strong>Composition:</strong> 1 Sergeant, 4-9 Intercessors
        </p>

        <p>
          <strong>Cost:</strong> 115/5 or 230/10
        </p>

        <div>
          <strong>Loadout:</strong>

          <ul>
            <li>
              <em> Heavy Bolt Rifle</em> (Default) [30″ A2 (+1 within 15") S5
              AP−1 D2] [HEAVY]
            </li>

            <li>
              <em>Heavy bolter</em> (1-in-5) [36″ A3 (+2 within 18", +1 on crit)
              S5 AP−1 D2] [HEAVY]
            </li>
          </ul>
        </div>

        <p>
          <strong>Unyielding in the Face of the Foe:</strong> +1 Save while
          controlling an objective.
        </p>

        <p>
          More than being slower, tougher Intercessors, Heavies are an
          affordable way of holding midfield objectives or screening for more
          fragile troops. Five are 15 wounds and OC10. If surviving prolonged
          close combat isn't paramount, they can replace costly Terminators or
          Bladeguards. Also, they are not beyond escorting Gravis characters.
        </p>

        <p>
          Anything up to a Marine, gradually aproaching a stationary Heavy
          Intercessor will have a bad time. The typical five-man squad (4
          rifles, 1 bolter) delivers 11 shots beyond 18″, 13 within 18″, 17
          within 15″ if everyone sees the target. +1 if the bolter crits.
        </p>

        <p>
          Dedicated fast assault units, however, will tie them up, and may
          overwhelm their OC. Their weapons can't do much against TEQ and
          beyound too.
        </p>
      </section>

      <section>
        <h2 id="heavy-intercessors">Eliminator Squad</h2>
        <Image
          src={Eliminators}
          alt="Eliminators in Warhammer 40K"
          className="side-img"
        />

        <div className="inlist">
          <Badge>INFANTRY</Badge>
          <Badge>EXPLOSIVES</Badge>
          <Badge>IMPERIUM</Badge>
          <Badge>PHOBOS</Badge>
          <Badge>SMOKE</Badge>
        </div>

        <p>
          <strong>Profile:</strong> MEQ M8″&uarr; T4&darr;
        </p>

        <p>
          <strong>Composition:</strong> 1 Sergeant, 2 Eliminators
        </p>

        <p>
          <strong>Cost:</strong> 85/10
        </p>

        <p>
          <strong>Core abilities:</strong> Infiltrators, Stealth
        </p>

        <div>
          <strong>Loadout:</strong>

          <ul>
            <li>
              <em>Bolt sniper rifle</em> (Default) [36″ S6 AP−2 D3] [HEAVY]
              [PRECISION]
            </li>

            <li>
              <em>Las fusil</em> [36″ S10 AP−3 D3+3] [HEAVY]
            </li>

            <li>
              <em>Instigator bolt carbine</em> (Sergeant only) [24″ A2 (4 within
              12″) 2+ S5 AP−2 D2] [LETHAL HITS vs infantry] [PRECISION]
            </li>
          </ul>
        </div>

        <p>
          <strong>Chameleoline Cloaks:</strong> This unit has -3" detection
          range.
        </p>

        <p>
          <strong>Special-issue Optics and Ammunition:</strong> While shooting,
          either ignore cover, or enemy unit has +6" detection range.
        </p>

        <p>
          If you have a specific long-range selective shooting job, that can
          benefit from stealth, you may consider Eliminators. Otherwise they are
          fragile and low-volume. Scouts offer stronger utility for 65 points.
          Infiltrators have more bodies, healing and detection. Incursors are
          more consistent through hit rerolls.
        </p>

        <p>
          Loadouts support a small variety. Because of [PRECISION], the Bolt
          sniper rifle leans towards hunting characters. The Las fusil would
          otherwise surpass it against elites and even light armor. Choose
          according to whatever gap you're filling. A failed wound is costly
          either way.
        </p>

        <p>
          The sergeant's carbine trades range and damage for volume, if you
          anticipate closer encounters. Just remember that an Eliminator Squad
          is only six wounds and very poor melee. Losing even one model reduces
          the output sharply.
        </p>

        <p>
          Their special rule works like selecting a fire mode. If the target is
          visible you may ignore its cover. If it's not, you can increase it's
          detection range.
        </p>
      </section>
    </>
  );
}
