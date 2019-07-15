import React from "react";
import { useState, useEffect, Fragment } from "react";
import Formulario from "./components/Formulario";

function App() {
  const [artist, setArtist] = useState("");
  const [lyric, setLyric] = useState("");
  const [info, setInfo] = useState({});

  return (
    <Fragment>
      <Formulario />
    </Fragment>
  );
}

export default App;
