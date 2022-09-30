import styled from "styled-components"
import play from "./img/seta_play.png"
import virar from "./img/seta_virar.png"

export default function Pergunta({ idx, questions, cores, icones, perguntas, setPergunas }) {

    const displayPergunta = undefined;

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
                <p>{questions[idx].textQuestion}</p>
                <img onClick={() => virarPergunta(idx)} src={virar} alt="?" />
            </div>
        )
    }

    function resposta(idx) {
        return (
            <div className="aberta" onClick={() => clickPergunta(idx)} >
                <p>{questions[idx].textAnswer}</p>
            </div>
        )
    }

    function respostaBonus(idx) {
        return (
            <div className="aberta">
                <p>{questions[idx].textAnswer}</p>
                <ContainerBotoes cores={cores}>
                    <button onClick={() => responderPergunta("vermelho")} className="vermelho">Não lembrei</button>
                    <button onClick={() => responderPergunta("amarelo")} className="amarelo">Quase não lembrei</button>
                    <button onClick={() => responderPergunta("verde")} className="verde">Zap!</button>
                </ContainerBotoes>
            </div>
        )
    }

    function perguntaFechadaMarcada(idx,resultado) {

        let ic = undefined;
        let classe = undefined;

        if(resultado === "certo"){
            ic = icones.certo
            classe = "verde"
        }else if(resultado === "quase"){
            ic = icones.quase
            classe ="amarelo"
        }else if(resultado === "erro"){
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

    const estado1 = perguntaFechada(0)
    const estado2 = perguntaAberta(0)
    const estado3 = resposta(0)
    const estado4 = respostaBonus(0)
    const estado5 = perguntaFechadaMarcada(0,"certo")
    const estado6 = perguntaFechadaMarcada(0,"quase")
    const estado7 = perguntaFechadaMarcada(0,"erro")


    function clickPergunta(idx) {

    }

    function virarPergunta(idx) {
        console.log("virarPergunta(idx) Acionado")
    }

    function responderPergunta(corIndice) {
        /*corIndice == r || corIndice == g || corIndice == b*/
        console.log("Pergunta responderPergunta acionado", corIndice)
    }



    return (
        <PerguntaContainer cores={cores}>
            {estado1}
            {estado2}
            {estado3}
            {estado4}
            {estado5}
            {estado6}
            {estado7}


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