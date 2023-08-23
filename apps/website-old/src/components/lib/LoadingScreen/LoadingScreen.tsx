import { FlexBox } from "@nimbleuikit/atoms";
import Image from "next/image";
import { theme } from "~/theme/theme";

const LoadingScreen = () => {
  return (
    <FlexBox
      width={"100%"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={theme.colors.primary}
      opacity={0.8}
    >
      <Image
        src="/logo-loading.svg"
        alt="Loading..."
        height={150}
        width={150}
        title="Nimble Ui Kit Loading"
      />
    </FlexBox>
  );
};

export default LoadingScreen;
