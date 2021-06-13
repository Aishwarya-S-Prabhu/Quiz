import { useState } from "react";


const AddQuestions = ({addQuestion}) => {
    const [question , setQuestion] = useState("")
    const [option1 , setOption1] = useState("")
    const [option2 , setOption2] = useState("")
    const [option3 , setOption3] = useState("")
    const [correctOption , setCorrectOption] = useState("")

    const runFunc = () =>{
        let flag=0
        if(!question) { alert ("PLIS WRITE QUESTION"); flag = 1}
        if(!option1 || !option2 || !option3 || !correctOption) {alert("WRITE ALL THE OPTIONS"); flag=1}
        if(!flag)
        addQuestion({question , option1,option2,option3,correctOption})
    }

    return (
        <div>
            <form>
                <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder='Question'></input>
                <input value={option1} onChange={(e) => setOption1(e.target.value)} placeholder='option 1'></input>
                <input value={option2} onChange={(e) => setOption2(e.target.value)} placeholder='option 2'></input>
                <input value={option3} onChange={(e) => setOption3(e.target.value)} placeholder='option 3'></input>
                <input value={correctOption} onChange={(e) => setCorrectOption(e.target.value)} placeholder='correct answer'></input>
                <input type='submit' onClick={() => runFunc()}/>
            </form>
        </div>
    )
}

export default AddQuestions
