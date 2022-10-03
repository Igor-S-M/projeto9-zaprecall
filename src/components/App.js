import React from 'react';
import ScreenContainer from './ScreenContainer.js';
import questions from './questions.js';

export default function App() {

    const [perguntasClicadas, setPerguntasClicadas] = React.useState([])
    const [perguntasViradas, setPerguntasViradas] = React.useState([])
    const [perguntasRespondidas, setPerguntasRespondidas] = React.useState({})
    const [progresso, setProgresso] = React.useState(0)

    console.log("renderizou APP:" , perguntasRespondidas)
    console.log("App",perguntasClicadas)

    return (
        <ScreenContainer questions={questions}
            perguntasClicadas={perguntasClicadas}
            setPerguntasClicadas={setPerguntasClicadas}
            perguntasViradas={perguntasViradas}
            setPerguntasViradas={setPerguntasViradas}
            perguntasRespondidas={perguntasRespondidas}
            setPerguntasRespondidas={setPerguntasRespondidas} 
            progresso={progresso}
            setProgresso={setProgresso}/>
    )
}