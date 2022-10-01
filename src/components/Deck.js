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
          question={questions[idx]}
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

const PerguntaContainer = styled.section`
    div{
        width: 300px;
        margin: 12px;
        padding: 15px;
        box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        justify-content: space-between;
        display: flex;
    }
    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
      }
  .fechada{ height: 35px;
        background-color: #FFFFFF;
        align-items: center;}
  .aberta{
        min-height: 100px;
        background: #FFFFD5;
        position: relative;
        flex-direction: column;
        img{
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
    
        div {
          display:flex;
          justify-content:space-around;
        }
  }
  .marcada p{
    text-decoration-line: line-through;
  }
  .verde p{
    color: ${props => props.cores.verde};
  }
  .amarelo p{
    color: ${props => props.cores.amarelo};
  }
  .vermelho p{
    color: ${props => props.cores.vermelho};
  }
`

const ContainerBotoes = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
  button{
  width: 90px;
  height: 33px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #FFFFFF;
  border-radius: 5px;
  padding:5px;
}
  .verde{
    background-color: ${props => props.cores.verde};
  }
  .amarelo{
    background-color: ${props => props.cores.amarelo};
  }
  .vermelho{
    background-color: ${props => props.cores.vermelho};
  }
`

/* 
{questions.map((card, idx) =>
    <Pergunta
        key={idx}
        idx={idx}
        questions={card}
        cores={card.cor}
        icones={card.icone}
    />)} 
/*

return (
    
)
<>
            {
                questions.map((card, idx) => {
                    <div className={clicado.includes(idx) ? "aberta" : "fechada"}>
                    <p>{card.textAnswer}</p>
                    <ContainerBotoes cores={card.cor}>
                        <button onClick={() => responderPergunta("vermelho")} className="vermelho">Não lembrei</button>
                        <button onClick={() => responderPergunta("amarelo")} className="amarelo">Quase não lembrei</button>
                        <button onClick={() => responderPergunta("verde")} className="verde">Zap!</button>
                    </ContainerBotoes>
                </div>
            })
        }
    </>

*/