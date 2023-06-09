import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./index.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle.js";
import { theme } from "./styles/theme.js";
import { RecoilRoot } from "recoil";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </ThemeProvider>
);
