import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";

function App() {
  return (
    <ContextProvider>
      <Contenu />
      <ToggleLangs/>
    </ContextProvider>
  );
}

export default App;
