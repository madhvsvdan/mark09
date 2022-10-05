import './App.css'

import { useState } from "react";

const musicDB = {
  EDM: [
    {
      name: "Hardwell ft. Mitch Crown – Call Me A Spaceman",
      rating: "4.5/5",
      url: "https://www.youtube.com/watch?v=ppy-fgbPn2s"
    },
    {
      name: "Hardwell feat. Chris Jones – Young Again",
      rating: "4.3/5",
      url: "https://www.youtube.com/watch?v=AQ0resnXCcE"
    },
    {
      name: "Martin Garrix & Jay Hardway - Wizard",
      rating: "4.1/5",
      url: "https://www.youtube.com/watch?v=e60C4WvvvCo"
    }
  ],
  Classical: [
    {
      name: "Symphony No. 5 - L.V.Beethoven",
      rating: "4.5/5",
      url: "https://www.youtube.com/watch?v=B7pQytF2nak"
    },
    {
      name: "Für Elise - L.V.Beethoven",
      rating: "4.3/5",
      url: "https://www.youtube.com/watch?v=_mVW8tgGY_w"
    },
    {
      name: "Piano Concerto No.24 - W.A.Mozart",
      rating: "4.1/5",
      url: "https://www.youtube.com/watch?v=PftH8FVzIRY"
    }
  ],
  Themes: [
    {
      name: "The Godfather",
      rating: "4.5/5",
      url: "https://www.youtube.com/watch?v=HWqKPWO5T4o"
    },
    {
      name: "OO7 - James Bond",
      rating: "4.3/5",
      url: "https://www.youtube.com/watch?v=U9FzgsF2T-s"
    },
    {
      name: "Star Wars - The Imperial March",
      rating: "4.1/5",
      url: "https://www.youtube.com/watch?v=s3SZ5sIMY6o"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Classical");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Music Recommender</h1>
        <p>Checkout my favorite music. Select a genre to get started</p>
        <div className="btn-container">
          {Object.keys(musicDB).map((genre) => (
            <button onClick={() => genreClickHandler(genre)}>{genre}</button>
          ))}
        </div>
        <hr />
        <div>
          <ul>
            {musicDB[selectedGenre].map((music) => (
              <li>
                <div className="rcmd-container">
                  <div className="rcmd-name">
                    <a href={music.url}>{music.name}</a>
                  </div>
                  <div className="rating"> {music.rating} </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
