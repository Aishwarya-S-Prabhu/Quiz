import { useContext } from 'react'
import { context } from '../Helpers/Context'

const Quiz = ({quizData}) => {
   
    const {setGameState} = useContext(context)
    const rand = Math.floor(Math.random() * 3 )
    return (
        <div>
            <h1>THIS IS QUIZ</h1>
            <div>
                <h1>{quizData[rand].question}</h1>
                <p>{quizData[rand].option1}</p>
                <p>{quizData[rand].option2}</p>
                <p>{quizData[rand].option3}</p>
                <p>{quizData[rand].correctOption}</p>
            </div>
            <button onClick={() => setGameState("menu")}>Go Back</button>
            <button onClick={() => setGameState("endScreen")}>End Screen</button>
        </div>
    )
}

export default Quiz
