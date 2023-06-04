import "@fontsource/montserrat-alternates";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, CSSReset, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "::-webkit-scrollbar": {
        display: "none",
      },
      body: {
        backgroundImage: "url('src/assets/andrew-neel-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        overscrollBehaviorY: "none",
        height: "100vh",
      },
    },
  },
  colors: {
    white: "#d6e4f0",
  },
  fonts: {
    body: `'Montserrat Alternates', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CSSReset />
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
