import { useContext } from 'react'
import { useLocation } from "wouter"
import Container from '../../components/Container'
import QuizContext from '../../context/UserContext'
import { NUMBER_OF_QUESTIONS } from '../../utilities/constants.utility'
import {ReactComponent as StartIcon} from './../../assets/start.svg'
import './Home.css'

const Home = () => {
    const {user, setUser, quiz, setTotalQuestions} = useContext(QuizContext)
    const [location, setLocation] = useLocation()

    const handleChange = (evt) => {
        setUser(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (quiz) {
            setLocation(`/quiz/${quiz.currentQuestion}`)
        }
        setLocation("/quiz/1")
    }

    return (
        <Container className='Home'>
            <p>
                Welcome "human being", this is a test to save the world as you have known by now.
                You must to response <strong>{NUMBER_OF_QUESTIONS} questions</strong> about anything.
                You only will have <strong>ONE option</strong> to response correctly every question.
            </p>
            <div className='Home_form'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        What's your name?
                    </label>
                    <input id="username" type="text" onChange={handleChange} />
                    <div className='buttons'>
                        <button type="submit">
                            <StartIcon />
                            Start quiz!
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default Home