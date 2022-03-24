import './SummaryQuote.css'

const SummaryQuote = ({percentage}) => {
    return (
        <div className='SummaryQuote'>
            {percentage < 60 && (
                <p>Ha Ha Ha! I will destroy the whole planet thanks to you!</p>
            )}
            
            {percentage >= 60 && percentage < 80 && (
                <p>I have to think about this results. Maybe you have saved the world... or maybe not!</p>
            )}

            {percentage >=80 && (
                <p>Well done! You have saved the world... by now!</p>
            )}
        </div>
    )
}

export default SummaryQuote