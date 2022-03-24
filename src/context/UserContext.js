import React from 'react'

const Context = React.createContext({
    user: '',
    quiz: null,
    totalQuestions: 10
})

export default Context