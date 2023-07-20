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