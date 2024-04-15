import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import "../../globalStyles/global.css";
import "../../globalStyles/theme.css";
import React from "react";
import { Helmet } from "react-helmet";
import { Theme, useGlobalState } from "../../context";
import { Footer } from "../Footer";
import { Header } from "../Header";
import * as classes from "./style.module.css";

interface LayoutProps {
  children: React.ReactElement;
  useSplashScreenAnimation: boolean;
  useCookieBar: boolean;
}

export function Layout(props: LayoutProps): React.ReactElement {
  const { globalState } = useGlobalState();
  const darkModeEnabled = globalState.theme === Theme.Dark;

  return (
    <>
      <Helmet
        bodyAttributes={{
          "data-theme": darkModeEnabled ? Theme.Dark : Theme.Light,
        }}
      />
      <Header />
      <div className={classes.Layout}>
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
}
