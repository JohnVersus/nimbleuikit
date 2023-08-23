import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { ThemeProvider } from "@nimbleuikit/atoms/utils";
import { theme } from "~/theme/theme";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
