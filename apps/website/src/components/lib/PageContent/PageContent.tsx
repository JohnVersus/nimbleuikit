import { FlexBox, Text } from "@nimbleuikit/atoms";
import { theme } from "~/theme/theme";
import { StatsProps } from "../Stats/Stats";
import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
const CodeComponent = dynamic(() =>
  import("../CodeComponent").then((mod) => mod.CodeComponent)
);

const Stats = dynamic(() => import("../Stats").then((mod) => mod.Stats));

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
        <Link href={"/logo.svg"} rel="preload" as="image" type="image/svg" />
        {!blink ? (
          <Image
            src={"/logo.svg"}
            width={"250"}
            height={"250"}
            loading="eager"
            layout="responsive"
            fetchPriority="high"
            rel="preload"
            alt="Logo"
            title="Nimble Ui Kit Logo"
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
        Nimble UI Kit - Light weight UI kit to create UI systems effortlessly!
      </Text>
      <CodeComponent />
      <Stats version={version} stars={stars} />
    </FlexBox>
  );
};

export default PageContent;
