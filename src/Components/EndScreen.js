
import { context } from '../Helpers/Context'
import { useContext, useEffect } from 'react'

const EndScreen = ({playerName , addscore , highScoreData}) => {
    useEffect(() => {
        addscore({score , playerName})
        
        
    })

    const {setGameState , score} = useContext(context)
    
    const quizDone = () =>{
        setGameState("menu")
        window.location.reload()
    }
    return (
        <div>
            <h1>THIS IS ENDSCREEN </h1>
            <div>
               <p> Score : {score}</p>
               <p> highScore: {highScoreData}  </p>

               <h4>You suck</h4>
            </div>
            <button onClick={() => quizDone()}>Menu</button>
        </div>
    )
}

export default EndScreen
