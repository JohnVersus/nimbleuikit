import { styled } from "@nimbleuikit/atoms/utils";
import { theme } from "~/theme/theme";

const Background = styled("main")({
  position: "relative",
  minHeight: "100vh",
  backgroundColor: theme.colors.primary,
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
});

export default Background;
