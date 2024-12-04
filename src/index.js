import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalState from "./context/context";
import './index.css';
import themes from "./theme";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GlobalState>
    <ChakraProvider theme= {themes}>
      <App />
    </ChakraProvider>
  </GlobalState>
)