import { context } from "../Helpers/Context"
import { useContext } from "react"


const LeaderBoard = ({scores}) => {
    const {setGameState} = useContext(context)

    var changedScore = [...scores]
    for(var i=0;i<changedScore.length;i++){
        for(var j=i;j<changedScore.length;j++){
            if(changedScore[i].score < changedScore[j].score){
                var temp = changedScore[i]
                changedScore[i] = changedScore[j]
                changedScore[j] = temp
            }
        }
    }  
    var count =1
    const scoredata = changedScore.map(obj =>{
        return(  <tr key={obj.id}>
           <td>{count++ + "."}</td>
           <td>{obj.playerName}</td>
           <td>{obj.score}</td>
         </tr>)
     })

    function Table() {

  
        return (
            <div >
                <div className='row justify-content-center'>
                    <div >
                        <table className='table table-dark table-bordered'>
                            <thead>
                                <tr style={{color : 'steelblue'}}>
                                    <th>Rank</th>
                                    <th>Player Name</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
    
                            <tbody>
                              {scoredata}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1>THIS IS A LEADERBOARD</h1>
            <button onClick={() => setGameState("menu")}>GO BACK</button>
            <div>
               {Table()}
            </div>
        </div>
    )
}

export default LeaderBoard
