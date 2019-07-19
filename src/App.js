import React from "react";
import { useState, useEffect, Fragment } from "react";
import Formulario from "./components/Formulario";
import axios from "axios";
import Song from "./components/Song";
import Info from "./components/Info";

function App() {
  const [artist, setArtist] = useState("");
  const [lyric, setLyric] = useState("");
  const [info, setInfo] = useState({});

  //Request API for lyrics
  const requestAPI = async search => {
    const { artist, song } = search;
    const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
    //Ask API
    const result = await axios(url);

    //Store found artist
    setArtist(artist);

    //Store lyric in state
    setLyric(result.data.lyrics);
  };

  //Request API artists and their info
  const requestAPIInfo = async () => {
    if (artist) {
      const url = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      const result = await axios(url);
      setInfo(result.data.artists[0]);
    }
  };

  useEffect(() => {
    requestAPIInfo();
  }, [artist]);

  return (
    <Fragment>
      <Formulario requestAPI={requestAPI} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info info={info} />
          </div>
          <div className="col-md-6">
            <Song lyric={lyric} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
