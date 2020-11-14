import React, { useState, useEffect } from 'react';
const URL = "https://official-joke-api.appspot.com/random_joke";
const RandomJoke = () => {
    const [joke, setJoke] = useState({});
useEffect(async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setJoke(data);
},[])
    return (
        <div className="joke-container">
            <h1>Random Joke</h1>
            <Joke joke={joke} />
        </div>
    )
}

const Joke = ({joke}) => {
    console.log("FROM HERE",joke)
    return (
        <div>
            <p>{joke.setup?joke.setup:"loading..."}</p>
            <p>{joke.punchline}</p>
        </div>
    )
}


export default RandomJoke;
