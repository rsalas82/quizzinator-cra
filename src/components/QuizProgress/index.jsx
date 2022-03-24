import { useEffect, useContext } from 'react'
import UserContext from '../../context/UserContext'
import './QuizProgress.css'

const QuizProgress = () => {
    const {user, quiz, setQuiz} = useContext(UserContext)

    useEffect(() => {
        
    }, [quiz])

    return (
        <div className="QuizProgress">
            {quiz.questions.map((question, index) => {
                let styleQuestion = quiz.currentQuestion === index + 1 ? "question_step active" : "question_step"
                styleQuestion += getStyleQuestion(question)
                return (
                    <div className={styleQuestion} key={`progress_${index+1}`}>
                        <div className='question_counter'>{index+1}</div>
                    </div>
                )
            })}
        </div>
    )
}

const getStyleQuestion = (question) => {
    if (typeof(question.isCorrect) === "undefined") {
        return ""
    } 
    if (question.isCorrect) {
        return " correct"
    }
    
    return " not_correct";
}

export default QuizProgress