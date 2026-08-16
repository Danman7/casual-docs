import Image from "next/image";
import MKLogo from "../../public/mk/mk_logo.webp";
import { SourceLink } from "../ui/SourceLink";
import {
  TbCircleNumber1,
  TbCircleNumber2,
  TbCircleNumber3,
  TbCircleNumber4,
  TbPlaystationCircle,
  TbPlaystationSquare,
  TbPlaystationTriangle,
  TbPlaystationX,
  TbXboxA,
  TbXboxB,
  TbXboxX,
  TbXboxY,
} from "react-icons/tb";

export default function Page() {
  return (
    <>
      <h1>Mortal Kombat</h1>

      <section>
        <Image
          src={MKLogo}
          alt="Mortal Kombat Logo"
          className="max-w-1/3 float-left"
        />

        <p>
          The dragon logo marks a duel of skill that often ends in virtual
          death, ever since the first Mortal Kombat (MK) was released by Midway
          Games in 1992. Since then, the series has expanded in characters,
          timelines, mechanics, and popularity.
        </p>

        <p>
          In 2009, the development team was acquired by Warner Bros. and
          re-established as NetherRealm Studios. This led to the creation of
          Mortal Kombat (MK9), Mortal Kombat X, Mortal Kombat 11, and Mortal
          Kombat 1. These titles form what is known as the <em>modern MK</em> or{" "}
          <em>NRS</em> era, which will be the focus of this section.
        </p>
      </section>

      <section>
        <h2 id="our-sources">Our sources</h2>

        <div className="list">
          <SourceLink
            href="https://wiki.supercombo.gg/w/Main_Page"
            text="SuperCombo Wiki"
          />

          <SourceLink
            href="https://glossary.infil.net/index.html"
            text="The Fighting Game Glossary by Infil"
          />

          <SourceLink
            href="https://www.youtube.com/@PNDKM"
            text="PNDK&M"
            type="youtube"
          />

          <SourceLink
            href="https://www.youtube.com/@Diff"
            text="Diff"
            type="youtube"
          />

          <SourceLink
            href="https://www.youtube.com/@rooflemonger"
            text="rooflemonger"
            type="youtube"
          />

          <SourceLink
            href="https://www.reddit.com/r/MortalKombat/"
            text="r/MortalKombat"
            type="reddit"
          />

          <SourceLink
            href="https://www.reddit.com/r/MortalKombatGameplay/"
            text="r/MortalKombatGameplay"
            type="reddit"
          />
        </div>
      </section>

      <section>
        <h2 id="move-annotations">Move annotations</h2>

        <p>
          MK is primarily played with a gamepad or controller. Because the games
          run on multiple platforms with different controllers, the community
          has agreed on a simplified notation using numbers instead. It is
          imperative to be able to read these to understand the moves.
        </p>

        <p>
          Most controllers have four buttons somewhere on the right side. These
          are called <em>face buttons</em>. For Xbox they are A, B, X, and Y.
          For PlayStation they are Cross, Circle, Square, and Triangle. However,
          most guides use 1, 2, 3, and 4.
        </p>

        <div className="list justify-around">
          <div className="flex items-center gap-2 flex-col">
            <p>Xbox</p>
            <div className="w-20 h-20 text-3xl grid grid-cols-3 grid-rows-3">
              <div></div>
              <TbXboxY />
              <div></div>
              <TbXboxX />
              <div></div>
              <TbXboxB />
              <div></div>
              <TbXboxA />
            </div>
          </div>

          <div className="flex items-center gap-2 flex-col">
            <p>PlayStation</p>
            <div className="w-20 h-20 text-3xl grid grid-cols-3 grid-rows-3">
              <div></div>
              <TbPlaystationTriangle />
              <div></div>
              <TbPlaystationSquare />
              <div></div>
              <TbPlaystationCircle />
              <div></div>
              <TbPlaystationX />
            </div>
          </div>

          <div className="flex items-center gap-2 flex-col">
            <p>Numbers</p>
            <div className="w-20 h-20 text-3xl grid grid-cols-3 grid-rows-3">
              <div></div>
              <TbCircleNumber2 />
              <div></div>
              <TbCircleNumber1 />
              <div></div>
              <TbCircleNumber4 />
              <div></div>
              <TbCircleNumber3 />
            </div>
          </div>
        </div>

        <p>The buttons are mapped like so:</p>

        <ul>
          <li>1 - Front Punch (X / Square)</li>
          <li>2 - Back Punch (Y / Triangle)</li>
          <li>3 - Front Kick (A / Cross)</li>
          <li>4 - Back Kick (B / Circle)</li>
        </ul>

        <p>
          The D-Pad on a gamepad is universal. Directions are described in
          relation to the position of the enemy like so:
        </p>

        <ul>
          <li>F - Forward / Towards your foe</li>
          <li>B - Backward / Away from your foe</li>
          <li>D - Down / Crouch</li>
          <li>J - Jump / Up, usually followed by a string</li>
        </ul>

        <p>
          And finally we have whatever special commands are assigned to the
          rear/paddle buttons, like block and grab, described as they are.
        </p>

        <p>
          So if you see <strong>1</strong> that means press Front Punch / X /
          Square button without any direction. If you see <strong>F3</strong>{" "}
          that means press Forward and Front Kick / A / Cross.{" "}
          <strong>DB2</strong> means press Down, then Back, then Back Punch / Y
          / Triangle.
        </p>

        <p>
          If you are playing on a PC with a keyboard, or are using another type
          of device, refer to the in-game button mapping.
        </p>
      </section>
    </>
  );
}
