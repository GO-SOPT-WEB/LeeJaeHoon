import GlobalStyle from "./styles/GlobalStyle.js";
import Router from "./Router.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import { RecoilRoot } from "recoil";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "./pages/Loading.jsx";
import { ErrorPage } from "./pages/ErrorPage.jsx";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <ErrorBoundary fallback={<ErrorPage></ErrorPage>}>
          <Suspense fallback={<Loading></Loading>}>
            <Router />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
