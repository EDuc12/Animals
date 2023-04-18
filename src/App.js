import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

export default function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div className="app">
      <button onClick={handleClick}>Add animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );

  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  // };
  // return (
  //   <div>
  //     <button onClick={handleClick}>Add animal</button>
  // {/* <div>Number of animals:{count}</div> */}
  //   </div>
  // );
}
