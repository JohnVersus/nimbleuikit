import { FlexBox, Text } from "@nimbleuikit/atoms";
import { theme } from "~/theme/theme";
import { CodeComponent } from "../CodeComponent";
import { Stats } from "../Stats";
import { StatsProps } from "../Stats/Stats";
import { useState } from "react";
import Image from "next/image";

const PageContent: React.FC<StatsProps> = ({ version, stars }) => {
  const [blink, setBlink] = useState(false);
  return (
    <FlexBox
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"1rem"}
      minHeight={"60vh"}
    >
      <FlexBox
        justifyContent={"center"}
        alignItems={"center"}
        onMouseOver={() => {
          setBlink(true);
        }}
        onMouseLeave={() => {
          setBlink(false);
        }}
        height={["200px", "200px", "200px", "200px", "250px", "400px"]}
        width={["200px", "200px", "200px", "200px", "250px", "400px"]}
      >
        {!blink ? (
          <Image
            src={"/logo.svg"}
            width={"250"}
            height={"250"}
            layout="responsive"
            alt="Logo"
            loading="lazy"
          />
        ) : (
          <Image
            src={"/logo-blink.svg"}
            width={"250"}
            height={"250"}
            layout="responsive"
            alt="Logo Blink"
            loading="lazy"
          />
        )}
      </FlexBox>
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