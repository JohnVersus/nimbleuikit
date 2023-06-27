import { Button, styled, variant } from "@nimbleuikit/atoms";

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
