import React from 'react';
import questions from './questions.js';
import ScreenContainer from './ScreenContainer.js';

const cores = {
    verde : "#2FBE34",
    amarelo:"#ff922e",
    vermelho:"#ff3030"
}

export default function App() {
    return (
        <ScreenContainer questions={questions}/>
    )
}