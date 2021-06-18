import React from 'react'
import { useContext } from 'react'
import { context } from '../Helpers/Context'

const Menu = ({playerName , setPlayerName}) => {
    const {setGameState , setScore} = useContext(context)
    
    return (
            <div>  
                <h1>THIS IS A MENU </h1>
                <div className='container'>
                    <input type='text' value={playerName} onChange={e => setPlayerName(e.target.value)} placeholder="PlayerName"></input>
                    <button type='submit' className='btn' onClick={() => {setGameState("quiz"); setScore(0) }} value="PLAY">PLAY</button>
                    <button type="submit" className='btn' onClick={() => setGameState("addQuestions")}value="Contribute">Add Questions</button>
                    <button type="submit" className='btn' onClick={() => setGameState("leaderboard")}value="LeaderBoard">LeaderBoard</button>
                </div>
            </div>
    )
}

export default Menu
