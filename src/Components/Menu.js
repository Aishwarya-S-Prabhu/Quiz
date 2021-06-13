import React from 'react'
import { useContext } from 'react'
import { context } from '../Helpers/Context'

const Menu = () => {
    const {setGameState} = useContext(context)
    return (
            <div>  
                <h1>THIS IS A MENU </h1>
                <div className='container'>
                    <input type='submit' onClick={() => setGameState("quiz")} value="PLAY"></input>
                    <input type="submit" onClick={() => setGameState("addQuestions")}value="Contribute"></input>
                </div>
            </div>
    )
}

export default Menu
