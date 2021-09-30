import "./Question.css";


const Question = (props) => {
    
    //const [answer , setAnswer] = useState('');
    var answer;
    var hasClickedCorrectAnswer = 0;
    

    const Options = props.options.map( (option)=>{
        return (
            <div className="option" ><input type="radio" name={props.question} value={option} onChange={(event)=>{
                //console.log(event.target.value);
                //setAnswer(event.target.value);
                answer = event.target.value;
                if(answer === props.correctAnswer && !hasClickedCorrectAnswer) {
                    props.setAnswerSheetFlag( props.index , 1 );
                    hasClickedCorrectAnswer = 1;
                } else if(answer !== props.correctAnswer && hasClickedCorrectAnswer) {
                    props.setAnswerSheetFlag( props.index , 0 );
                    hasClickedCorrectAnswer = 0;
                }
            }} /><label>{option}</label></div>
        )
    } )

    return (
        <div className="question-body" >
            <div className="question" >{props.question}</div>
            <div className="options" >
                {Options}
            </div>
        </div>
    )
}

export default Question;