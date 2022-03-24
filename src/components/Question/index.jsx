import decodeString from "../../utilities/decodeString.utility"
import RadioOption from "../RadioOption"
import './Question.css'

const Question = ({id, question, correctAnswer, options, disabled, checked, handleChange}) => {

    return (
        <div className="Question">
            <div className="Question_question">
                <p><strong>{`Question ${id+1}:`}</strong></p>
                <p>{`${decodeString(question)}`}</p>
            </div>
            <div className="Question_answers">
                {options.map((answer, index) => {
                    return <RadioOption 
                                key={`radio_option_${index}`} 
                                name={`question_${id}`} 
                                value={answer} 
                                label={decodeString(answer)}
                                correctAnswer={correctAnswer}
                                disabled={disabled}
                                checked={checked && checked.value === answer ? true : false}
                                handleChange={handleChange} />
                })}
            </div>
        </div>
    )
}

export default Question