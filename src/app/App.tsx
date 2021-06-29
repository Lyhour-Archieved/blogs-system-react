import { Button } from "@material-ui/core";
import React from "react";
import logo from "../assets/logo.svg";
import { AuthProvider } from "../context/AuthProvider";
import { RouteView } from "../router";
import "../styles/App.css";
import { AsurRaaDraggableModalProvider } from "@asurraa/sura-ui-modal";
function App() {
  return (
    <div>
      <AuthProvider token="jskhkfhskjd">
        <AsurRaaDraggableModalProvider>
          <RouteView />
        </AsurRaaDraggableModalProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
