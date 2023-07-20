import Head from "next/head";
import { useState, useEffect } from "react";
import {
  Background,
  NavBar,
  PageContent,
  LoadingScreen,
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
      <Head>
        <title>Nimble UI kit - Website</title>
        <meta
          name="description"
          content={
            "Nimble UI Kit - Light weight UI kit to create stunning UI systems effortlessly!."
          }
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="Icons/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="Icons/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="Icons/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="Icons/site.webmanifest"></link>
        <link
          rel="mask-icon"
          href="Icons/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <link rel="shortcut icon" href="Icons/favicon.ico"></link>
        <meta
          name="apple-mobile-web-app-title"
          content="Nimble Ui Kit - Website"
        ></meta>
        <meta name="application-name" content="Nimble Ui Kit - Website"></meta>
        <meta name="msapplication-TileColor" content="#1d1d72"></meta>
        <meta
          name="msapplication-config"
          content="Icons/browserconfig.xml"
        ></meta>
        <meta name="theme-color" content="##1d1d72ff"></meta>

        {/* Open Graph tags */}
        <meta property="og:title" content={"Nimble UI kit - Website"} />
        <meta
          property="og:description"
          content={
            "Nimble UI Kit - Light weight UI kit to create stunning UI systems effortlessly!."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={"/thumbnail.webp"} />
        <meta
          property="og:url"
          content={"https://nimbleuikit-website.vercel.app/"}
        />
        <meta property="og:site_name" content={"Nimble UI kit - Website"} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Nimble UI kit - Website"} />
        <meta
          name="twitter:description"
          content={
            "Nimble UI Kit - Light weight UI kit to create stunning UI systems effortlessly!."
          }
        />
        <meta name="twitter:image" content={"/thumbnail.webp"} />
        <meta name="twitter:site" content={"_johnversus"} />
        <meta name="twitter:creator" content={"_johnversus"} />
      </Head>
      <Background>
        <NavBar />
        <PageContent version={version} stars={stars} />
      </Background>
    </>
  );
}
