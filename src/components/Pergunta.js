import React, { useState } from "react"
import styled from "styled-components"
import virar from "./img/seta_virar.png"


export default function Pergunta(props) {



    const { idx, questions, cores, icones, perguntasClicadas, setPerguntasClicadas, perguntasViradas, setPerguntasViradas,
        perguntasRespondidas, setPerguntasRespondidas, progresso, setProgresso } = props




    //estados possiveis: fechado, aberto, resposta, marcada
    const [estadoTela, setEstadoTela] = useState("fechado")

    //rsultado
    const [resultado, setResultado] = useState("")


    //Clicar na pergunta para ela abrir
    function clickPergunta(idx) {


        const novoEstado = [...perguntasClicadas]
        novoEstado.push(idx)



        setEstadoTela("aberto")

        setPerguntasClicadas(novoEstado)
    }

    //CLicar no icone Virar para mostrar a resposta
    function virarPergunta(idx) {


        const novoEstado = [...perguntasViradas]
        novoEstado.push(idx)

        setEstadoTela("resposta")



        setPerguntasViradas(novoEstado)

    }

    //Clicar em algum botao para marcar a resposta
    function responderPergunta(idx, resultado) {


        const novoEstado = Object.assign({}, perguntasRespondidas)
        novoEstado[idx] = resultado
        let vT = progresso + 1 

        setPerguntasRespondidas(novoEstado)
        setResultado(resultado)
        setProgresso(vT)
        setEstadoTela("marcado")


    }


    return (
        <PerguntaContainer>

            {estadoTela === "fechado" && <PerguntaFechada idx={idx} icones={icones} perguntasRespondidas={perguntasRespondidas} clickPergunta={clickPergunta} />}
            {estadoTela === "aberto" && <PerguntaAberta idx={idx} questions={questions} perguntasRespondidas={perguntasRespondidas} virarPergunta={virarPergunta} />}
            {estadoTela === "resposta" && <Resposta idx={idx} cores={cores} questions={questions} perguntasRespondidas={perguntasRespondidas} responderPergunta={responderPergunta} icones={icones} setPerguntasRespondidas={setPerguntasRespondidas} />}
            {estadoTela === "marcado" && <PerguntaFechadaMarcada idx={idx} icones={icones} resultado={resultado} perguntasRespondidas={perguntasRespondidas} />}


        </PerguntaContainer >
    )
}

function PerguntaFechada({ idx, icones, perguntasRespondidas, clickPergunta }) {


    return (
        <div className="fechada" onClick={() => clickPergunta(idx, perguntasRespondidas)} >
            <p>Pergunta {idx + 1}</p>
            <img src={icones.play} alt="?" />
        </div>
    )
}

function PerguntaAberta({ idx, questions, perguntasRespondidas, virarPergunta }) {

    return (
        <div className="aberta" >
            <p>{questions[idx].textQuestion}</p>
            <img onClick={() => virarPergunta(idx, perguntasRespondidas)} src={virar} alt="?" />
        </div>
    )
}

function Resposta({ idx, questions, cores, perguntasRespondidas, responderPergunta, icones, setDisplayPergunta, setPerguntasRespondidas }) {


    return (
        <div className="aberta">
            <p>{questions[idx].textAnswer}</p>
            <ContainerBotoes cores={cores}>
                <button onClick={() => responderPergunta(idx, "erro", icones, setDisplayPergunta, setPerguntasRespondidas, perguntasRespondidas, PerguntaFechadaMarcada)} className="vermelho">Não lembrei</button>
                <button onClick={() => responderPergunta(idx, "quase", icones, setDisplayPergunta, setPerguntasRespondidas, perguntasRespondidas, PerguntaFechadaMarcada)} className="amarelo">Quase não lembrei</button>
                <button onClick={() => responderPergunta(idx, "certo", icones, setDisplayPergunta, setPerguntasRespondidas, perguntasRespondidas, PerguntaFechadaMarcada)} className="verde">Zap!</button>
            </ContainerBotoes>
        </div>
    )
}

function PerguntaFechadaMarcada({ idx, icones, resultado }) {

    let ic = undefined;
    let classe = undefined;

    if (resultado === "certo") {
        ic = icones.certo
        classe = "verde"

    } else if (resultado === "erro") {
        ic = icones.erro
        classe = "vermelho"
    } else if (resultado === "quase") {
        ic = icones.quase
        classe = "amarelo"
    }

    return (
        <div className={`fechada marcada ${classe}`}>
            <p>Pergunta {idx + 1}</p>
            <img src={ic} alt="?" />
        </div>

    )
}



//styled components
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