import React from "react"
import styled from "styled-components"
import play from "./img/seta_play.png"
import virar from "./img/seta_virar.png"


export default function Pergunta(props) {


    const { idx, question, cores, icones, perguntasClicadas, setPerguntasClicadas, perguntasViradas, setPerguntasViradas,
        perguntasRespondidas, setPerguntasRespondidas } = props


    function perguntaFechada(idx) {
        return (
            <div className="fechada" onClick={() => clickPergunta(idx)} >
                <p>Pergunta {idx + 1}</p>
                <img src={play} alt="?" />
            </div>
        )
    }

    function perguntaAberta(idx) {
        return (
            <div className="aberta" >
                <p>{question.textQuestion}</p>
                <img onClick={() => virarPergunta(idx)} src={virar} alt="?" />
            </div>
        )
    }

    function resposta(idx) {
        return (
            <div className="aberta">
                <p>{question.textAnswer}</p>
                <ContainerBotoes cores={cores}>
                    <button onClick={() => responderPergunta(idx, "errado")} className="vermelho">Não lembrei</button>
                    <button onClick={() => responderPergunta(idx, "quase")} className="amarelo">Quase não lembrei</button>
                    <button onClick={() => responderPergunta(idx, "certo")} className="verde">Zap!</button>
                </ContainerBotoes>
            </div>
        )
    }

    function perguntaFechadaMarcada(idx, resultado) {

        let ic = undefined;
        let classe = undefined;

        if (resultado === "certo") {
            ic = icones.certo
            classe = "verde"
        } else if (resultado === "quase") {
            ic = icones.quase
            classe = "amarelo"
        } else if (resultado === "errado") {
            ic = icones.erro
            classe = "vermelho"
        }

        return (
            <div className={`fechada marcada ${classe}`}>
                <p>Pergunta {idx + 1}</p>
                <img src={ic} alt="?" />
            </div>

        )
    }
    /*
        const estado1 = perguntaFechada(idx)
        const estado2 = perguntaAberta(idx)
        const estado3 = resposta(idx)
        const estado5 = perguntaFechadaMarcada(idx, "certo")
        const estado6 = perguntaFechadaMarcada(idx, "quase")
        const estado7 = perguntaFechadaMarcada(idx, "erro")
    */

    const [displayPergunta, setDisplayPergunta] = React.useState(perguntaFechada(idx));

    function clickPergunta(idx) {
        console.log("clickPergunta acionado")
        const novoEstado = [...perguntasClicadas]

        if (novoEstado === []) {
            novoEstado.push(idx)
        } else {

            novoEstado.pop()
            novoEstado.push(idx)
        }

        setDisplayPergunta(perguntaAberta(idx))
        setPerguntasClicadas(novoEstado)
    }


    function virarPergunta(idx) {
        console.log("virarPergunta(idx) Acionado")
        const novoEstado = [...perguntasViradas]

        if (novoEstado === []) {
            novoEstado.push(idx)
        } else {
            novoEstado.pop()
            novoEstado.push(idx)
        }

        setDisplayPergunta(resposta(idx))
        setPerguntasViradas(novoEstado)
    }

    function responderPergunta(idx, resultado) {
        console.log("Pergunta responderPergunta acionado", resultado)
        const novoEstado = [...perguntasRespondidas]

        if (novoEstado === []) {
            novoEstado.push(idx)
        } else {
            novoEstado.pop()
            novoEstado.push(idx)
        }

        setDisplayPergunta(perguntaFechadaMarcada(idx, resultado))
        setPerguntasRespondidas(novoEstado)
    }


    return (
        <PerguntaContainer>

            {displayPergunta}

        </PerguntaContainer >
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
    color:#2FBE34;
  }
  .amarelo p{
    color:#ff922e;
  }
  .vermelho p{
    color:#ff3030;
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

  .verde {
    background-color:#2FBE34;
  }
  .amarelo {
    background-color:#ff922e;
  }
  .vermelho {
    background-color:#ff3030;
  }

`