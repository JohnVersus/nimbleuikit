import { useState, useEffect } from "react";
import Head from "next/head";
import {
  Background,
  NavBar,
  PageContent,
  LoadingScreen,
  SeoTags,
} from "~/components/lib";

export default function Home() {
  const [stars, setStars] = useState(0);
  const [version, setVersion] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubStars() {
      try {
        const resGithub = await fetch(
          "https://api.github.com/repos/JohnVersus/nimbleuikit"
        );
        const dataGithub = await resGithub.json();
        setStars(dataGithub.stargazers_count);
      } catch (error) {
        console.log(error);
      }
    }

    async function fetchVersion() {
      try {
        const resNpm = await fetch(
          "https://registry.npmjs.org/@nimbleuikit/atoms"
        );
        const dataNpm = await resNpm.json();
        setVersion(dataNpm["dist-tags"].latest);
      } catch (error) {
        console.log(error);
      }
    }

    fetchGithubStars();
    fetchVersion();
  }, []);

  useEffect(() => {
    if (version && stars) setLoading(false);
  }, [version, stars]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <SeoTags
        title="Nimble UI kit"
        description=" Nimble UI Kit - Light weight UI kit to create stunning UI systems
          effortlessly!."
        favicon="/logo.svg"
        thumbnailUrl="/thumbnail.png"
        url="https://nimbleuikit-website.vercel.app/"
        siteName="Nimble UI kit Website"
        twitterUsername="_johnversus"
      />
      <Background>
        <NavBar />
        <PageContent version={version} stars={stars} />
      </Background>
    </>
  );
}
