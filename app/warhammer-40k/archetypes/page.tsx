import { getPage } from "@/app/siteMap";
import Intercessors from "../../../public/wh40k/intercessor.webp";
import Terminators from "../../../public/wh40k/terminator.webp";
import CadianShock from "../../../public/wh40k/cadian-shock.webp";
import Rhino from "../../../public/wh40k/rhino.webp";
import Image from "next/image";

const archetypesPage = getPage("/warhammer-40k/archetypes");

export const metadata = archetypesPage.metadata;

export default async function Page() {
  return (
    <>
      <h1>{archetypesPage.title}</h1>

      <section>
        <p>
          WH40k has <em>thousands</em> of weapons and models that can interact
          with each other. Archetypes simplify this profusion into groups based
          on how something performs.
        </p>
      </section>

      <section>
        <h2 id="target-archetypes">
          Target archetype - what kind of weapon efficiently kills this
        </h2>

        <p>
          A model's archetype is determined by its{" "}
          <strong>defensive profile + modifiers</strong>. This consists of{" "}
          <strong>Toughness, Wounds, and Save</strong>, and occasionally Feel No
          Pain, Invulnerable Saves, or other modifiers.
        </p>

        <div className="flex justify-between">
          <div>
            <div className="font-bold">Weapon</div>
            <div>Strength</div>
            <div>Armor Penetration</div>
            <div>Damage</div>
          </div>

          <div>
            <div>&nbsp;</div>
            <div>&harr;</div>
            <div>&harr;</div>
            <div>&harr;</div>
          </div>

          <div>
            <div className="font-bold">Target</div>
            <div>Toughness</div>
            <div>Saves</div>
            <div>Wounds</div>
          </div>
        </div>

        <p>
          <strong>Wound breakpoints matter.</strong> Toughness is most important
          when it changes the wound roll: S5 wounds T4 on a 3+, but T6 on a 5+.
        </p>

        <p>
          <strong>Damage has breakpoints too.</strong> D2 is ideal into W2 and
          D3 into W3, because excess damage from a single attack is wasted.
        </p>
      </section>

      <section>
        <h2 id="main">3 principal infantry profiles</h2>
      </section>

      <section>
        <h3 id="geq">GEQ a.k.a. Light Infantry or Horde [T3 W1]</h3>

        <Image
          src={CadianShock}
          alt="Cadian Shock Troops in Warhammer 40K"
          className="side-img sm:max-w-1/3"
        />

        <p>
          The initialism GEQ (Guards Equivalent) comes from the Imperial Guard
          infantry, which are{" "}
          <strong>
            individually fragile, but usually fielded in large numbers
          </strong>
          . This roughly covers 20% of infantry across all factions with
          variations in squad sizes, Toughness and Save.
        </p>

        <p>
          <strong>Volume is crucial.</strong> More attacks matter more than
          damage and Strength, while AP is largely irrelevant. Any weapon with
          enough attacks is good, but Flamers are particularly effective because{" "}
          <strong>Torrent</strong> removes the hit roll, while{" "}
          <strong>Blast</strong> helps against large units.
        </p>
      </section>

      <section>
        <h3 id="meq">MEQ a.k.a. Marines [T4 W2 3+]</h3>

        <Image
          loading="eager"
          src={Intercessors}
          alt="Intercessors in Warhammer 40K"
          className="side-img sm:max-w-1/3"
        />

        <p>
          Marines are the <strong>infantry benchmark</strong> for WH40k. The{" "}
          <strong>
            most common <em>exact</em> non-character profile
          </strong>{" "}
          in the game. Sometimes called <em>standard</em> or{" "}
          <em>medium infantry</em>, they are a combination of decent Toughness,
          two wounds and good armour.
        </p>

        <p>
          <strong>D2 is key</strong> here, because every failed save can remove
          a model. S5+ and some AP are also desirable. The{" "}
          <strong>Heavy Bolter</strong> [S5 AP-1 D2] is the textbook anti-MEQ
          weapon. A supercharged Plasma Gun also works well.
        </p>
      </section>

      <section>
        <h3 id="teq">TEQ a.k.a Terminators [T5 W3 2+/4++]</h3>

        <Image
          src={Terminators}
          alt="Terminators in Warhammer 40K"
          className="side-img sm:max-w-1/3"
        />

        <p>
          This is <strong>heavy durable infantry</strong> protected by excellent
          armor. There are much fewer datasheets than any other group, but
          Terminators are <strong>not simply MEQ+</strong>.
        </p>

        <p>
          Light arms struggle a lot here. The profile naturally expects D3
          weapons with very good Strength, but the{" "}
          <strong>invulnerable save</strong> puts a limit on how effective AP
          can be. Anything above AP-2 normally has no further benefit before
          modifiers. Thus, the presence of TEQ on the field requires proper
          gear like a supercharged Heavy Plasma Cannon, Reaper launcher, or Rail
          Rifle.
        </p>
      </section>

      <section>
        <h2 id="sub-profiles">Infantry sub-profiles fill the gaps</h2>

        <h3 id="armor-geq">Armored GEQ [GEQ + 3+]</h3>

        <p>
          Battle Sisters are <strong>GEQ with better armor</strong>. Still easy
          to wound, but effectiveness moves away from Flamers and any Lasgun
          towards massed Bolt Rifles and standard Plasma.
        </p>

        <h3 id="gravis">Heavy (Gravis) infantry [T5-6 W3 3+]</h3>

        <p>
          This is <strong>actual MEQ+</strong> - a step above Marines, but{" "}
          <strong>not quite Terminators</strong>. The name comes from Heavy
          Intercessors that wear Gravis armor. D2 becomes inefficient. Heavy
          Plasma Cannon and Autocannon perform well.
        </p>
      </section>

      <section>
        <h2 id="vehicles">Vehicles and monsters are broader than infantry</h2>

        <Image src={Rhino} alt="Rhino in Warhammer 40K" className="side-img" />

        <p>
          Profile attributes for models beyond infantry become{" "}
          <strong>very diversified</strong>. Wounds alone tend to range anywhere
          between 8 and 20+. <strong>Toughness is the primary benchmark</strong>{" "}
          here, because it gives useful breakpoints.
        </p>

        <h3 id="light">Light Armor [T8-9]</h3>

        <p>
          Around a quarter of the vehicles and monsters in WH40k are tough
          enough to hinder conventional weapons, but still vulnerable to
          medium-strength attacks. The <strong>Autocannon</strong> [S9 D3] does
          more attacks of enough damage, while the <strong>Melta</strong> [S9
          AP-4 D6] trades volume for quality.
        </p>

        <h3 id="medium">Medium Armor [T10-11]</h3>

        <p>
          This is where proper anti-tank weapons become necessary. The{" "}
          <strong>Lascannon</strong> [S12 AP-3 D6+1] is the standard. Light and
          medium armor cover about half of all vehicles and monsters.
        </p>

        <h3 id="heavy">Heavy Armor [T12]</h3>

        <p>
          A lone Lascannon is half-reliable against a Land Raider [T12 W16 2+].
          The answer is <strong>Strength + Volume</strong>. Or a heavy dedicated
          anti-tank weapon like the <strong>Railgun</strong> [S20 AP-5 D6+6].
        </p>

        <h3 id="super-heavy">Super-heavy Armor [T13+]</h3>

        <p>
          The Lascannon wounds on a 5+. These are the toughest centrepieces and
          need time and concentrated firepower to remove.
        </p>
      </section>

      <section>
        <h2 id="modifiers">Modifiers can change the matchup</h2>

        <p>
          Two models with similar profiles may require different weapons because
          of Invulnerable Saves, Feel No Pain, Damage Reduction, Cover, -1 to
          wound, etc. Archetypes describe efficient weapon matchups, not formal
          unit categories. Many units sit between them.
        </p>
      </section>
    </>
  );
}
