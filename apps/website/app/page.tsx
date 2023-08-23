"use client";
import { useState, useEffect } from "react";
import {
  Background,
  NavBar,
  PageContent,
  LoadingScreen,
} from "~/components/lib";
import { ThemeProvider } from "@nimbleuikit/atoms/utils";
import { theme } from "~/theme/theme";
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // You can adjust this value as needed
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }
  }, [loading]);

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
