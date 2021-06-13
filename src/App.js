import Menu from "./Components/Menu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { useState } from "react";
import { context } from "./Helpers/Context"
import AddQuestions from "./Components/AddQuestions";
import { useEffect } from "react";


function App() {
  const [gameState , setGameState] = useState("menu")
  const [quizThings , setQuizThings] = useState([])

  useEffect(() =>{
    const func = async() =>{
      const data = await fetch("http://localhost:8000/quiz")
      const quizData = await data.json()
      setQuizThings(quizData)
    }
    func()
  },[])

  const addQuestion = async (ques) => {
         await fetch('http://localhost:8000/quiz',{
        method : 'POST',
        headers : {'Content-type' : 'application/json'},
        body : JSON.stringify(ques)
      })
  }

  return (
    <div className='main'>
      <context.Provider value ={{setGameState}}>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz quizData={quizThings}/>}
        {gameState === "endScreen" && <EndScreen />}
        {gameState === "addQuestions" && <AddQuestions addQuestion ={addQuestion}/>}
      </context.Provider>
    </div>
  );
}

export default App;
