import "./QuizPage.css"

import { useState } from "react";

import QuestionSet from "../../Questions/QuestionSet";
import Question from "../../Components/Widgets/Questions/Question";

const QuizPage = (props)=> {

    const [score , setScore] = useState(0);
    //var score = parseInt(0);
    var areTheyCorrect = new Array(QuestionSet.length).fill(0);

    const setAnswerSheetFlag = (index , isCorrect)=>{
        if(isCorrect)   areTheyCorrect[index] = 1;
        else    areTheyCorrect[index] = 0;
        
    }

    console.log(areTheyCorrect);

    var i = 0;
    const Questions = QuestionSet.map( (question)=>{
        return (
            <Question question={question.question} options={question.options} correctAnswer={question.correctAnswer}
                setAnswerSheetFlag={setAnswerSheetFlag}
                index={i++}
            />
        )
    } )

    return (
        <div className="quiz-page" >
            <div style={{display: "flex", flex: 1, flexDirection: "row"}}>
                <div style={{flex: 1}} ></div>

                <div className="questions" >
                    {Questions}

                    <div className={"submit-btn btn"} onClick={()=>{
                        console.log("sheet = " + areTheyCorrect);
                        areTheyCorrect.forEach( (i)=>{
                            setScore( score + i )
                        } )
                        console.log("score = " + score);
                    }} >Submit</div>
                </div>

                

                <div style={{flex: 1}} ></div>
            </div>
        </div>
    )
}

export default QuizPage;