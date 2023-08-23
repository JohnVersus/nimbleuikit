"use client";
import {
  Background,
  NavBar,
  PageContent,
  LoadingScreen,
} from "./components/lib";
import { ThemeProvider } from "@nimbleuikit/atoms/utils";
import { theme } from "./theme/theme";
import { getPackages } from "./components/server/getPackages";

export default function Home() {
  let loading = true;

  if (loading) {
    const timer = setTimeout(() => {
      loading = false;
    }, 500); // You can adjust this value as needed
    return () => clearTimeout(timer); // Clean up the timer on unmount
  }

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Background>
          <NavBar />
          <PageContent />
        </Background>
      </ThemeProvider>
    </>
  );
}
