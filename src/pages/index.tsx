import Head from "next/head";
import { useRouter } from "next/router";

import BtnLink from "@/Buttons/BtnLink";
import Hero from "@/components/Hero";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Crickets Studio / Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero title="Crickets Studio">
          <div className="btn-group">
            <BtnLink onClick={() => router.push("/about")}>About Us</BtnLink>
            <BtnLink
              onClick={() =>
                router.replace("https://github.com/Crickets-Studio")
              }
            >
              Github
            </BtnLink>
          </div>
        </Hero>
      </main>
    </>
  );
}
