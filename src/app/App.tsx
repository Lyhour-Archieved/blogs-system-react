import React from "react";
import { AuthProvider } from "../context/AuthProvider";
import { RouteView } from "../router";
import "../styles/App.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <RouteView />
      </AuthProvider>
    </div>
  );
}

export default App;
