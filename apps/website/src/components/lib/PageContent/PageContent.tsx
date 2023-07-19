import { Box, FlexBox, Text } from "@nimbleuikit/atoms";
import { styled } from "@nimbleuikit/atoms/utils";
import { theme } from "~/theme/theme";
import { CodeComponent } from "../CodeComponent";
import { Stats } from "../Stats";
import { StatsProps } from "../Stats/Stats";

const LogoWrapper = styled(Box)({
  backgroundImage: "url(/logo.svg)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  ":hover": {
    backgroundImage: "url(/logo-blink.svg)",
  },
});

const PageContent: React.FC<StatsProps> = ({ version, stars }) => {
  return (
    <FlexBox
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      marginTop={"2rem"}
      gap={"1rem"}
      minHeight={"60vh"}
    >
      <LogoWrapper
        height={["200px", "200px", "200px", "200px", "250px", "400px"]}
        width={["200px", "200px", "200px", "200px", "250px", "400px"]}
      />
      <Text
        color={theme.colors.accent}
        textAlign={"center"}
        width={["90%", "70%", "70%", "70%", "70%", "50%"]}
        as="h1"
        fontSize={[3, 4, 5, 6]}
      >
        Nimble UI Kit - Light weight UI kit to create stunning UI systems
        effortlessly!
      </Text>
      <CodeComponent />
      <Stats version={version} stars={stars} />
    </FlexBox>
  );
};

export default PageContent;
