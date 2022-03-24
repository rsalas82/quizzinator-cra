import axios from "axios";
import quizResponseAdapter from "../adapters/quizResponseAdapter";
import mockResponse from './mockResponse.json'

export const getQuiz = async(number_questions) => {
    return await axios.get(`https://opentdb.com/api.php?amount=${number_questions}`).then(response => {
        const quiz = response.data.results;
        return quizResponseAdapter(quiz)
    }).catch(err => {
        console.error(`${err.message}. The service is not available.`)
        return quizResponseAdapter(mockResponse.results)
    })
}