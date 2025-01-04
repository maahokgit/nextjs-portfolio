"use client";
import { customTheme } from "@/lib/customTheme";
import { ThemeProvider, useTheme } from "@mui/material";

interface MainProps {
  children: React.ReactNode;
}

const Main = (props: MainProps) => {
  const outerTheme = useTheme();

  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <main>{props.children}</main>
    </ThemeProvider>
  );
};

export default Main;
