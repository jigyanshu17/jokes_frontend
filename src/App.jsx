import React, { useEffect, useState } from "react";
import axios from "axios";

const JokesList = () => {
  const [jokes, setJokes] = useState([]);

  // Fetch jokes from the backend
  useEffect(() => {
    axios
      .get("https://jokesbackend.vercel.app/api/jokes")
      .then((response) => {
        setJokes(response.data);
        console.log("Fetched jokes:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-5xl bg-red-500">Jokes app {jokes.length}</h1>
      {jokes.length > 0 ? (
        <ul>
          {jokes.map((joke) => (
            <li key={joke.id}>
              <strong>Setup:</strong> {joke.setup}
              <br />
              <strong>Punchline:</strong> {joke.punchline}
              <br />
              <strong>Category:</strong> {joke.category}
              <br />
              <small>
                Created At: {new Date(joke.createdAt).toLocaleString()}
              </small>
            </li>

          ))}
        </ul>
        
      ) : (
        <p className="bg-red-500">Loading jokes...</p>
      )}
    </div>
  );
};

export default JokesList;
