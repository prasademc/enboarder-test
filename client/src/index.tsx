import React from "react";
import ReactDOM from "react-dom";
import { Normalize } from 'styled-normalize'
import App from "./App";
import GlobalStyle from './theme';
import { StoreProvider } from "./store";

ReactDOM.render(
  <StoreProvider>
    <Normalize />
    <GlobalStyle />
    <App />
  </StoreProvider>,
  document.getElementById("cape-canaveral")
);
