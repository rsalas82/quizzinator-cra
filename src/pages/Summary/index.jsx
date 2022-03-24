import { useContext, useEffect } from 'react'
import { useLocation } from 'wouter'
import Container from '../../components/Container'
import UserContext from '../../context/UserContext'
import {ReactComponent as CorrectIcon} from './../../assets/correct.svg'
import {ReactComponent as WrongIcon} from './../../assets/wrong.svg'
import {ReactComponent as TrophyIcon} from './../../assets/trophy.svg'
import './Summary.css'
import SummaryQuote from '../../components/SummaryQuote'

const Summary = () => {
    const {user, quiz} = useContext(UserContext)
    const [location, setLocation] = useLocation()

    let percentage = 0;
    useEffect(() => {
        if (!quiz) {
            setLocation('/')
        }
    }, [])
    
    percentage = quiz.correctQuestions / quiz.questions.length * 100;
    const getStyleByPercentage = (percentage) => {
        if (percentage < 60)
            return "death"
        if (percentage >= 60 && percentage < 80)
            return "retry"
        return "live"
    }

    return (
        <>
        {quiz && (
            <Container className='Summary'>
                <h2>Summary</h2>
                <p>Let's see your results {user}... </p>
                <div className='Summary_grid'>
                    <div className='live'>
                        <CorrectIcon />
                        <strong>Correct answers</strong>
                    </div>
                    <div>{quiz.correctQuestions}</div>
                    <div className='death'>
                        <WrongIcon />
                        <strong>Wrong answers</strong>
                    </div>
                    <div>{quiz.errorQuestions}</div>
                    <div className='retry'>
                        <TrophyIcon />
                        <strong>Worthiness</strong>
                    </div>
                    <div className={getStyleByPercentage(percentage)}>{percentage}%</div>
                </div>
                <SummaryQuote percentage={percentage}/>
            </Container>
        )}
        </>
    )
}

export default Summary