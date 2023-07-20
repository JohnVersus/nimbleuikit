import { FlexBox, Text } from "@nimbleuikit/atoms";
import { theme } from "~/theme/theme";
import { Star } from "react-feather";
import Link from "next/link";
export interface StatsProps {
  version: string;
  stars: number;
}

const Stats: React.FC<StatsProps> = ({ version, stars }) => {
  return (
    <FlexBox justifyContent={"center"} gap={"2rem"}>
      {version && (
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
              &ensp;{version}
            </Text>
          </FlexBox>
        </Link>
      )}
      {stars && (
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
              &ensp;{stars}
            </Text>
          </FlexBox>
        </Link>
      )}
      {/* You can add more stats here */}
    </FlexBox>
  );
};

export default Stats;
