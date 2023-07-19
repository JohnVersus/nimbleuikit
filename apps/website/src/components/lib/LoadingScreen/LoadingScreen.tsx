import { FlexBox } from "@nimbleuikit/atoms";
import Image from "next/image";
import { theme } from "~/theme/theme";

const LoadingScreen = () => {
  return (
    <FlexBox
      position={"fixed"}
      top={0}
      left={0}
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={theme.colors.primary}
      css={{
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("/noise.png")',
          opacity: 0.4,
          pointerEvents: "none",
        },
      }}
    >
      <Image
        src="/logo-loading.svg"
        alt="Loading..."
        height={300}
        width={300}
      />
    </FlexBox>
  );
};

export default LoadingScreen;
