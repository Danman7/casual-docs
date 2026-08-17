import { getPage } from "@/app/siteMap";
import Image from "next/image";
import Link from "next/link";
import Scorpion from "../../../public/mk1/scorpion.webp";

const scorpionPage = getPage("/mortal-kombat-1/scorpion");
const neutralPage = getPage("/mortal-kombat/neutral");

export const metadata = scorpionPage.metadata;

export default function Page() {
  return (
    <>
      <h1>{scorpionPage.title}</h1>

      <section>
        <Image
          src={Scorpion}
          alt="Scorpion in Mortal Kombat 1"
          className="max-w-1/3 ml-4 float-right"
        />

        <p>
          MK1's Scorpion is built around fundamentals, being neither an obvious
          rushdown nor a zoning fighter. He{" "}
          <strong>lacks complex mechanics</strong> and relies on clean{" "}
          <Link href={`${neutralPage.href}#footsies`}>footsies</Link>,{" "}
          <Link href={`${neutralPage.href}#whiff`}>whiff-punishes</Link>, and
          strike/throw offense. Even though he has tools for all ranges, he is{" "}
          <strong>most comfortable at mid-screen</strong>.
        </p>

        <p>
          As with other titles, Scorpion is perhaps the most{" "}
          <strong>straightforward, begginer-friendly</strong> character, with
          simple combo routes and mostly safe normals.
        </p>

        <h2 id="mid">Control mid, win neutral</h2>

        <p>
          <strong>Standing 2</strong> is a good starting point. It's a safe,
          10-frame, <em>disjointed</em> High with surprisingly good reach. Memo
          its range. You can play beginner footsies by staying at the edge of
          this attack and catch approaching foes when they are 2-3 steps away.
        </p>

        <p>
          <strong>Standing 1</strong> is a 7-frame High with much shorter reach,
          that is <em>+2 on hit</em>. It's a quick, super-close range punch
          useful as an emergency check, fast punish, viable anti-air (decent
          vertical hitbox), and footsie shenanigans (
          <strong>1 into 1/throw</strong> if you can hit the 2-frame window, or{" "}
          <strong>1 backdash 2</strong>).
        </p>

        <p>
          <strong>Back 3</strong> is a very unique move - one of the few slow
          and unsafe Scorpion normals. It's a <em>disjointed</em>, 21-frame, −19
          on block, 2-hit Mid-Low, where the first hit is cancellable. It's
          terrible on sheet, but it reaches far (jump + dash) and has long
          active frames (17). Once opponents have a taste of it, they tend to
          preemptively low block or jump at this range, which plays into
          conditioning.
        </p>
      </section>
    </>
  );
}
