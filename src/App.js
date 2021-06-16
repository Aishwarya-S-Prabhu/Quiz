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
  const [score , setScore] = useState(0)
  const[bestScore , setBestScore] = useState([])
  const[newScore , setNewScore] = useState(0)

  useEffect(() =>{
    const func = async() =>{
      const data = await fetch("http://localhost:8000/quiz")
      const quizData = await data.json()
      setQuizThings(quizData)
      const scoreData = await fetch('http://localhost:8000/score')
      const high = await scoreData.json()
      setBestScore(high)
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

  const addScore = async (finalScore) =>{
    await fetch('http://localhost:8000/score',{
      method : 'POST',
      headers : { 'Content-type' : 'application/json'},
      body : JSON.stringify(finalScore)
    })

    if(newScore < finalScore){
      setNewScore(finalScore)
    }
  }

  var cheat = true
  while(cheat){
  
    for(var i=0;i<bestScore.length;i++){
      if(newScore < bestScore[i].score){
        setNewScore(bestScore[i].score)
      }
    }
    cheat = false
  }

  return (
    <div className='main'>
      <context.Provider value ={{setGameState , setScore , score}}>
        {gameState === "menu" && <Menu />}
        {gameState === "quiz" && <Quiz quizData={quizThings}/>}
        {gameState === "endScreen" && <EndScreen quizData={quizThings} addscore={addScore} highScoreData={newScore} />}
        {gameState === "addQuestions" && <AddQuestions addQuestion ={addQuestion} />}
      </context.Provider>
    </div>
  );
}

export default App;
