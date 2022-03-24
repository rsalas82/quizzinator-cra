import './RadioOption.css'

const RadioOption = ({id, name, value, label, disabled, checked, correctAnswer, handleChange}) => {
    const normalizeText = (textToNormalize) => {
        return textToNormalize.replaceAll(" ", "_").replaceAll("'", "_").toLowerCase()
    }

    const getOptionStyles = () => {
        if (disabled && correctAnswer === value)
            return "correct_answer"
        if (disabled && checked && correctAnswer !== value)
            return "wrong_answer"
        return ""
    }

    return (
        <div className={`RadioOption ${getOptionStyles()}`}>
            <input id={normalizeText(value)} type="radio" name={name} value={value} disabled={disabled} checked={checked} onChange={handleChange} />
            <label htmlFor={normalizeText(value)}>{label}</label>
        </div>
    )
}

export default RadioOption