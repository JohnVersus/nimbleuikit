import { FlexBox, Text } from "@nimbleuikit/atoms";
import { theme } from "~/theme/theme";
import { Star } from "react-feather";
import Link from "next/link";
import { useEffect, useState } from "react";
export interface StatsProps {
  version: string;
  stars: number;
}

const Stats: React.FC = () => {
  const [stars, setStars] = useState(0);
  const [version, setVersion] = useState("");

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
        setStars(1);
        setVersion("0.6.1");
      }
    }

    fetchData();
  }, []);
  return (
    <FlexBox justifyContent={"center"} gap={"2rem"}>
      <Link
        href="https://www.npmjs.com/package/@nimbleuikit/atoms"
        passHref
        target="_blank"
        rel="noopener noreferrer"
      >
        <FlexBox>
          <Text
            color={theme.colors.secondary}
            fontSize={"16px"}
            fontStyle={"italic"}
          >
            Version:
          </Text>
          <Text
            color={theme.colors.accent}
            css={{
              "&:hover": {
                textDecoration: "underline",
                color: theme.colors.accent,
              },
            }}
          >
            &ensp;{version ? version : "___"}
          </Text>
        </FlexBox>
      </Link>

      <Link
        href="https://github.com/JohnVersus/nimbleuikit"
        passHref
        target="_blank"
        rel="noopener noreferrer"
      >
        <FlexBox>
          <Text
            color={theme.colors.secondary}
            fontSize={"16px"}
            fontStyle={"italic"}
          >
            <Star size={20} />
          </Text>
          <Text
            color={theme.colors.accent}
            css={{
              "&:hover": {
                textDecoration: "underline",
                color: theme.colors.accent,
              },
            }}
          >
            &ensp;{stars ? stars : "__"}
          </Text>
        </FlexBox>
      </Link>
    </FlexBox>
  );
};

export default Stats;
