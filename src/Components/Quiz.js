import { useContext, useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { context } from '../Helpers/Context'

const Quiz = ({quizData}) => {
    const [optionChosen , setOptionChosen] = useState("")
    const [rand ,setRand] = useState(0)
    const[firstQuestionIndex , setFirstQuestionIndex] = useState(0)
    const {setGameState , setScore , score} = useContext(context)
    var count =0
    quizData.forEach(() =>{
        count++
    })


    useEffect(() =>{
        setRand(Math.floor(Math.random() * count ))
    },[count])


    const nextQuestion =() =>{

        if(optionChosen === quizData[rand].correctOption){
            setScore(score + 1)
        }

        if(!firstQuestionIndex) setFirstQuestionIndex(rand)
        else if (firstQuestionIndex-1 === rand) setGameState("endScreen")

        setRand(rand + 1)
        if(rand >= count-1){
            setRand(0)
        }
        setOptionChosen("")
       
    }
    return (
        <div>
            <h1>THIS IS QUIZ</h1>
            <div>
                <h1>{quizData[rand].question}</h1>
                <p onClick={() => setOptionChosen("a")}>{quizData[rand].option1}</p>
                <p onClick={() => setOptionChosen("b")}>{quizData[rand].option2}</p>
                <p onClick={() => setOptionChosen("c")}>{quizData[rand].option3}</p>
                <p onClick={() => setOptionChosen("d")}>{quizData[rand].option4}</p>
            </div>
            <button onClick={nextQuestion}> Next Question</button>
            <div>
            <button onClick={() => setGameState("menu")}>Go Back</button>
            <button onClick={() => setGameState("endScreen")}>Exit Quiz</button>
            </div>
        </div>
    )
}

export default Quiz
