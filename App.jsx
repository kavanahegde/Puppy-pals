import { puppyList } from "./data";
import { useState } from "react";

import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }

  // Bonus: How to display list of trick names?
  function getTricksString(tricks) {
    const tricksStr = tricks.map((trick) => trick.title).join(", ");
    return tricksStr.length > 0 ? tricksStr : "None";
  }

  return (
    <div className="App">
      {featPupId && (
        <div id="featured">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
            <li>Tricks: {getTricksString(featuredPup.tricks)}</li>
          </ul>
        </div>
      )}

      {puppies.map((puppy) => {
        return (
          <p
            className="puppy-name"
            onClick={() => handleClick(puppy.id)}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;