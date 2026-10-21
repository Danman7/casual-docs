import { getPage } from "@/app/siteMap";
import { Badge } from "@/app/ui/Badge";
import Image from "next/image";
import Link from "next/link";

import Intercessors from "../../../../public/wh40k/intercessor.webp";
import AssaultIntercessors from "../../../../public/wh40k/assault-intercessor.webp";
import HeavyIntercessors from "../../../../public/wh40k/heavy-intercessor.webp";
import Eliminators from "../../../../public/wh40k/eliminators.webp";

const unitsPage = getPage("/warhammer-40k/space-marines/infantry");
const roundPage = getPage("/warhammer-40k/battle-round");
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

        <div>
          <strong>Key loadout:</strong>{" "}
          <ul>
            <li>
              <em>Bolt Rifle</em> (Default) [24" 3+ AP-1] [RAPID FIRE 1]
              <ul>
                <li>
                  <em>Saturation</em> [A2 S5 D1] [ASSAULT]
                </li>

                <li>
                  <em>Focused Fire</em> [A1 S6 D2] [HEAVY]
                </li>
              </ul>
            </li>
            <li>
              Grenade Launcher (1-in-5){" "}
              <ul>
                <li>Frag [A4 S4 AP-1 D1] [BLAST 1]</li>
                <li>Krak [A1 S10 AP-2 D3] [RAPID FIRE 1]</li>
              </ul>
            </li>
          </ul>
        </div>

        <p>
          <strong>Tactical Mainstay:</strong> Can act even while engaged or{" "}
          <Link href={`${roundPage.href}#half-strength`}>Battle-shocked</Link>,
          and shoot while acting.
        </p>

        <p>
          <strong>Bolter Discipline:</strong> +1 to hit if either this unit or
          the target is on an objective.
        </p>

        <p>
          Intercessors are simply the Marines' general-purpose infantry. They
          fill gaps, so your specialists and elites don't have to. A reasonably
          durable and priced package that can contribute to the front, rear, or
          sides. A squad of Intercessors is almost never a bad idea, but it
          might be unnecessary. Check your list's needs.
        </p>

        <p>
          The Bolt Rifle has two firing modes: anti-
          <Link href={`${archetypesPage.href}#geq`}>GEQ</Link>{" "}
          <em>Saturation</em> and anti-MEQ <em>Focused Fire</em>. You also can,
          and should, attach one Grenade Launcher per 5 Rifles for some reach
          against both hordes and tougher infantry.
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

        <div>
          <strong>Key loadout:</strong>{" "}
          <ul>
            <li>
              <em>Chainsword</em> (Default) [A4 S5 AP−1 D1]
            </li>
            <li>
              <em>Heavy Bolt Pistol</em> [A1 S5 AP-1 D1]
            </li>
          </ul>
        </div>

        <p>
          <strong>Targeted Intercession:</strong> Chainswords get +1S +1AP on
          charging.
        </p>

        <p>
          Assault Intercessors are a budget way of tying up and bullying
          infantry off objectives, provided they're the ones initiating combat.
          As standard M6" foot troops, they are very reliant on delivery and
          charges to do that efficiently. If they remain engaged or receive a
          charge instead, they don't benefit from their special rule.
        </p>

        <p>
          Still, they can make good use of doctrines. <em>Assault</em> gives
          them advance-and-charge, while <em>Tactical</em> -
          fallback-and-charge. And they can work as cheap bodyguards for
          characters, some like the Captain, giving access to said doctrines.
        </p>

        <p>
          Alternatively, jump Assaults have less OC and weaker charges but much
          better reach. Bladeguards are stronger, more durable melee. Chapters
          like Blood Angels and Space Wolves have their own melee specialists.
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
          <strong>Key loadout:</strong>

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
          <strong>Key loadout:</strong>

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
