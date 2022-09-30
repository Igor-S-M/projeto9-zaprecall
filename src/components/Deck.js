import React from "react"
import Pergunta from "./Pergunta.js"


export default function Deck(props) {

    const { questions, cores, icones, perguntas, setPerguntas } = props

    function criarEstadoPerguntas(){
        const estadoInicial = []
        questions.map((i,idx)=>{estadoInicial.push("_")})
        console.log(estadoInicial)
    }

    criarEstadoPerguntas()

    return (
        <main>
            {questions.map((i, idx) =>
                <Pergunta
                    key={idx}
                    idx={idx}
                    questions={questions}
                    cores={cores}
                    icones={icones}
                    perguntas = {perguntas} setPerguntas = {setPerguntas}
                />)}
        </main>
    )
}
