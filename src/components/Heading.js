import React, { useState } from 'react';

const gameGenres = [
    "Action",
    "Adventure",
    "Role-playing",
    "Simulation",
    "Strategy",
    "Sports",
    "Puzzle",
    "Idle",
    "Horror",
    "Survival",
    "Shooter",
    "Fighting",
    "Racing",
    "Platformer",
    "Sandbox",
    "Rhythm",
    "Stealth",
    "MMORPG",
    "MOBA",
    "Card",
    "Board",
    "Educational",
    "Trivia",
    "Party",
    "Music",
    "Dance",
    "Tycoon",
    "Tower Defense",
    "Beat 'em up",
    "Metroidvania",
    "Rogue-like",
    "Visual Novel",
    "Text Adventure",
    "Interactive Movie",
    "Battle Royale",
    "Hack and Slash",
    "Open World",
    "Tactical",
    "Turn-based Strategy",
    "Real-time Strategy",
    "Real-time Tactics",
    "Turn-based Tactics",
    "Artillery",
    "Wargame",
    "Grand Strategy",
    "City-building",
    "Construction and Management",
    "Life Simulation",
    "Vehicle Simulation",
    "Dating Simulation",
    "Economic Simulation",
    "God Game",
    "Digital Pet",
    "Fitness",
    "Casual",
    "Hyper-casual",
    "Experimental",
    "Serious",
    "Alternate Reality",
    "Augmented Reality",
    "Virtual Reality"
  ];

function Heading(){
    const [word, setWord] = useState("RPG");
     
    function handleClick() {
        const randomGenre = gameGenres[Math.floor(Math.random() * gameGenres.length)];
        setWord(randomGenre);
      }
    function handleWhatever(){
        setWord("RPG")
    }
    
    return(
        <div className='card'>

          <h1>Play {word} game !</h1>
         <button onClick = {handleClick}> Random </button>
         <button onClick = {handleWhatever}> Reset </button>
         
        </div>

    );
};

export default Heading;