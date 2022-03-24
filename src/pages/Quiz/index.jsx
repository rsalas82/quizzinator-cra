import { useEffect, useState, useContext } from 'react'
import { useLocation } from 'wouter'
import { getQuiz } from '../../services/getQuiz'
import Question from '../../components/Question'
import UserContext from '../../context/UserContext'
import Spinner from '../../components/Spinner'
import QuizProgress from '../../components/QuizProgress'
import Container from '../../components/Container'
import { NUMBER_OF_QUESTIONS } from '../../utilities/constants.utility'
import {ReactComponent as NextIcon} from './../../assets/next.svg'
import {ReactComponent as SaveIcon} from './../../assets/save.svg'
import {ReactComponent as ResultsIcon} from './../../assets/results.svg'
import './Quiz.css'

const Quiz = () => {
    const {user, quiz, setQuiz} = useContext(UserContext)
    const [location, setLocation] = useLocation()
    const [question, setQuestion] = useState(null)
    const [answer, setAnswer] = useState()

    useEffect(() => {
        if (!quiz) {
            getQuiz(NUMBER_OF_QUESTIONS).then(response => {setQuiz(response)})
        }
    }, [])

    useEffect(() => {
        if (quiz) {
            setQuestion(quiz.questions[quiz.currentQuestion-1])
        }
    }, [quiz])

    const handleNext = () => {
        const nextQuestion = quiz.currentQuestion + 1;
        setQuiz({
            ...quiz,
            currentQuestion: nextQuestion
        })
        setLocation(`/quiz/${nextQuestion}`)
    }

    const handleSummary = () => {
        setLocation("/summary")
    }

    const handleSave = () => {
        updateQuiz()
    }

    const handleChangeQuestion = (evt) => {
        setAnswer({
            id: (evt.target.name).split("_")[1],
            value: evt.target.value
        })
    }

    const updateQuiz = () => {
        let questions = quiz.questions;
        const isCorrect = answer.value === question.correctAnswer;
        questions[quiz.currentQuestion-1] = {
            ...question,
            isSaved: true,
            isCorrect: isCorrect
        };
        setQuiz({
            ...quiz,
            errorQuestions: !isCorrect ? quiz.errorQuestions+1 : quiz.errorQuestions,
            correctQuestions: isCorrect ? quiz.correctQuestions+1 : quiz.correctQuestions,
            questions: [...questions]
        })
    }

    return (
        <Container className='Quiz'>
            <p>
                Hi <strong>{user}</strong>. 
                You must answer this <strong>{NUMBER_OF_QUESTIONS} questions</strong> in order.
                When you click the 'Save' button, I'll show you the correct answer and I'll mark in the progress bar.
                At the end of the quiz, I'll show your results. Good luck!
            </p>
            
            {(!quiz || !question) && <Spinner />}
            
            {quiz && question && (
                <>
                    <QuizProgress />
                    
                    <Question 
                        key={`question_${question.id}`} 
                        id={question.id} 
                        question={question.question} 
                        correctAnswer={question.correctAnswer} 
                        options={question.options}
                        disabled={question.isSaved}
                        checked={answer}
                        handleChange={handleChangeQuestion} />
                    
                    <div className='buttons'>
                        {(!question.isSaved || quiz.questions.length !== quiz.currentQuestion) && (
                            <>
                                {quiz.currentQuestion < quiz.questions.length && (
                                    <button className={!question.isSaved && (quiz.currentQuestion < quiz.questions.length) ? "disabled" : ""}
                                        disabled={!question.isSaved && (quiz.currentQuestion < quiz.questions.length)} 
                                        onClick={handleNext}>
                                            <NextIcon />
                                            Next
                                    </button>
                                )}
                                <button className={question.isSaved ? "disabled" : ""} 
                                    disabled={question.isSaved} 
                                    onClick={handleSave}>
                                        <SaveIcon />
                                        Save
                                </button>
                            </>
                        )}
                        {question.isSaved && (quiz.questions.length === quiz.currentQuestion) && (
                            <button onClick={handleSummary}>
                                <ResultsIcon />
                                View Results
                            </button>
                        )}
                    </div>
                </>
                )}
        </Container>
    )
}

export default Quiz