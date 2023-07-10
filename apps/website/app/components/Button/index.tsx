import { Button } from "@nimbleuikit/atoms";
import { styled, variant } from "@nimbleuikit/atoms/utils";

const StyledButton = styled(Button)(
  variant({
    variants: {
      primary: {
        color: "black",
        bg: "white",
      },
      secondary: {
        color: "white",
        bg: "black",
      },
    },
  })
);
