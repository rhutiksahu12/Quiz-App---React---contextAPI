import { useState, useContext } from "react";

import { QuizContext } from "./Helpers/Context";
import MainMenu from './Components/MainMenu'
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen'


function App() {

  const [gameState, setGameState] = useState("menu")
  const [ score, setScore ] = useState(0)
  return (
    <>
      <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>

        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <EndScreen />}
      </QuizContext.Provider>


    </>
  );
}

export default App;
