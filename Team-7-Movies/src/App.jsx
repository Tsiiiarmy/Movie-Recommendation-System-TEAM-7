import { useState } from "react";

import "./App.css";
import WishPage from "./pages/WishPage";
import JoinNow from "./pages/JoinNow";
import NavBar from "./pages/NavBar";
function App() {

  return (
    <>
      {/* <WishPage/> */}
      <NavBar />
      <JoinNow />
    </>
  );
}

export default App;
