import React, { useState } from 'react';
import ModeToggle from "./components/ModeToggle";
import Childs from "./components/Childs";
import InputComponent from "./components/InputComponent";
import Counter from "./components/Counter";
import BasicForm from "./components/BasicForm";
import Heading from "./components/Heading";
import MealsProvider from "./providers/MealsProvider";
import MealsList from "./components/MealsList";
import Counterm from "./components/Counterm";
import Wallet from "./components/Wallet";
import './App.css';

function App() {
  const [darkModeOn, setDarkModeOn] = useState(true);

  return (
    <div className={darkModeOn ? 'dark-mode' : 'light-mode'}>
      <h1>Playing with React Components & Hooks</h1>
      <div>
        <ModeToggle darkModeOn={darkModeOn} setDarkModeOn={setDarkModeOn} />
        <Childs message={new Date().toLocaleTimeString()} darkModeOn={darkModeOn} />
      </div>
      <div className="container">
        <Counter />
        <Heading />
        <InputComponent  />
        <BasicForm />
        <div className='card'>
          <MealsProvider>
             <MealsList />
             <Counterm />
          </MealsProvider>
        </div>
        <Wallet />
      </div>
      </div>

  );
}

export default App;
