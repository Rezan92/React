import React, { useState, useEffect } from "react";
const URL = "https://official-joke-api.appspot.com/random_joke";
const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(URL);
      const data = await response.json();
      setJoke(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <div className="joke-container">
      <h1>Random Joke</h1>
      {isLoading ? (
        <div className="loading-joke">
          <div className="loading loading-joke"></div>
        </div>
      ) : (
        <Joke joke={joke} />
      )}
    </div>
  );
};

const Joke = ({ joke }) => {
  return (
    <div>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
};

export default RandomJoke;
