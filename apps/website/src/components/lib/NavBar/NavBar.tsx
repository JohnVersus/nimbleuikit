import { useState } from "react";
import Link from "next/link";
import { MasterButton } from "~/components/lib";
import { styled } from "@nimbleuikit/atoms/utils";
import { theme } from "~/theme/theme";
import { Box, FlexBox, Text } from "@nimbleuikit/atoms";
import Image from "next/image";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FlexBox
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={["0.5rem 1rem", "1rem 2rem"]}
      css={{
        backdropFilter: "blur(5px)",
      }}
    >
      <Link href="/" passHref>
        <FlexBox alignItems={"center"}>
          <Image
            src="/logo.svg"
            height={50}
            width={50}
            alt="website logo"
            loading="lazy"
          />
          <Text
            color={theme.colors.accent}
            fontWeight={"bolder"}
            fontSize={[3, 3, 3, 4, 5]}
          >
            {isOpen ? "" : "Nimble UI Kit"}
          </Text>
        </FlexBox>
      </Link>
      <FlexBox gap={"1rem"} display={[isOpen ? "flex" : "none", "flex"]}>
        <Link
          href="https://johnversus.github.io/nimbleuikit/"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <MasterButton
            themeVariant="nav"
            fontColor="accent"
            fontSize="large"
            icon="Book"
            id="Storybook Docs"
          >
            {isOpen ? "" : "Storybook Docs"}
          </MasterButton>
        </Link>
        <Link
          href="https://github.com/JohnVersus/nimbleuikit/releases"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <MasterButton
            themeVariant="nav"
            fontColor="accent"
            fontSize="large"
            icon="ChevronsUp"
            id="Changelog"
          >
            {isOpen ? "" : "Changelog"}
          </MasterButton>
        </Link>
        <Link
          href="https://github.com/JohnVersus/nimbleuikit"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <MasterButton
            themeVariant="nav"
            fontColor="accent"
            fontSize="large"
            icon="GitHub"
            id="GitHub"
          >
            {isOpen ? "" : "GitHub"}
          </MasterButton>
        </Link>
      </FlexBox>
      <Box display={["block", "none"]}>
        <MasterButton
          themeVariant="nav"
          icon={isOpen ? "X" : "Menu"}
          onClick={() => setIsOpen(!isOpen)}
          fontColor="accent"
          id="Menu"
        ></MasterButton>
      </Box>
    </FlexBox>
  );
};

export default NavBar;
