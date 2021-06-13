import React from 'react'
import { context } from '../Helpers/Context'
import { useContext } from 'react'

const EndScreen = () => {
    const {setGameState} = useContext(context)
    return (
        <div>
            <h1>THIS IS ENDSCREEN </h1>
            <div>
               <p> Score :</p>
               <p> highScore: </p>

               <h4>You suck</h4>
            </div>
            <button onClick={() => setGameState("menu")}>Go Back</button>
        </div>
    )
}

export default EndScreen
