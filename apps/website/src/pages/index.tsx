import { useState, useEffect } from "react";
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
    async function fetchData() {
      try {
        const resGithub = fetch(
          "https://api.github.com/repos/JohnVersus/nimbleuikit"
        );
        const resNpm = fetch("https://registry.npmjs.org/@nimbleuikit/atoms");

        const [dataGithub, dataNpm] = await Promise.all([resGithub, resNpm]);

        const githubJson = await dataGithub.json();
        const npmJson = await dataNpm.json();

        setStars(githubJson.stargazers_count);
        setVersion(npmJson["dist-tags"].latest);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (version && stars) setLoading(false);
  }, [version, stars]);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // You can adjust this value as needed
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }
  }, [loading]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <SeoTags />
      <Background>
        <NavBar />
        <PageContent version={version} stars={stars} />
      </Background>
    </>
  );
}
