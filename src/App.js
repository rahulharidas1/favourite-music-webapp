import "./styles.css";
import { useState } from "react";

var genres = ["HipHop", "Dubstep", "Pop"];
var favSongs = {
  HipHop: [
    {
      name: "Drake - PopStar",
      rating: "4/5"
    },
    {
      name: "NF - Let You Down",
      rating: "4.5/5"
    }
  ],
  Dubstep: [
    {
      name: "Skrillex - Bangarang",
      rating: "4.5/5"
    },
    {
      name: "Chris Linton & Cadmium - Slow Down",
      rating: "4/5"
    }
  ],
  Pop: [
    {
      name: "Mark Ronson - Uptown Funk ft. Bruno Mars",
      rating: "4.5/5"
    },
    {
      name: "Sia - Cheap Thrills",
      rating: "4/5"
    }
  ]
};

export default function App() {
  var [finalGenre, setFinalGenre] = useState("HipHop");

  function onClickHandler(genre) {
    setFinalGenre(genre);
  }

  return (
    <div className="App">
      <h1>
        Favourite Music!<span role="img">🎶</span>
      </h1>
      <h2>
        Checkout some of my favourite songs. Select a genre to get started!
      </h2>

      {genres.map((genre) => {
        return (
          <button
            key={genre}
            onClick={() => onClickHandler(genre)}
            className="genre-tab"
          >
            {genre}
          </button>
        );
      })}
      <hr />
      <ul className="list">
        {favSongs[finalGenre].map((item, index) => {
          return (
            <li className="list-item" key={index}>
              <div>{item.name}</div>
              <div>{item.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
