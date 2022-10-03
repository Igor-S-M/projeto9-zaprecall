import React from "react"
import styled from "styled-components";
import Pergunta from "./Pergunta.js"


export default function Deck(props) {

  const { questions, cores, icones, perguntasClicadas, setPerguntasClicadas, perguntasViradas, setPerguntasViradas,
    perguntasRespondidas, setPerguntasRespondidas } = props



  return (
    <main>
      {questions.map((i, idx) =>
        <Pergunta
          key={idx}
          idx={idx}
          questions={questions}
          cores={cores}
          icones={icones}
          perguntasClicadas={perguntasClicadas}
          setPerguntasClicadas={setPerguntasClicadas}
          perguntasViradas={perguntasViradas}
          setPerguntasViradas={setPerguntasViradas}
          perguntasRespondidas={perguntasRespondidas}
          setPerguntasRespondidas={setPerguntasRespondidas}
        />)}
    </main>
  )


}

