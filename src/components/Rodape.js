import React from "react";
import styled from "styled-components"




export default function Rodape({ icones ,cores, perguntas, setPerguntas }) {

  let perguntasRespondidasTeste = 3;
  let totalPerguntas = 8;

  function responderPergunta(corIndice) {
    /*corIndice == r || corIndice == g || corIndice == b*/
    console.log("Rodape responderPergunta acionado", corIndice)
}


  return (
    <Foot>
      <ContainerBotoes cores = {cores}>
        <button onClick={() => responderPergunta("vermelho")} className="vermelho">Não lembrei</button>
        <button onClick={() => responderPergunta("amarelo")} className="amarelo">Quase não lembrei</button>
        <button onClick={() => responderPergunta("verde")} className="verde">Zap!</button>
      </ContainerBotoes>
      <p>{perguntasRespondidasTeste}/{totalPerguntas} Concluidos</p>
      <ContainerIcones>
        <img src={icones.certo} alt="?" />
        <img src={icones.quase} alt="?" />
        <img src={icones.erro} alt="?" />
      </ContainerIcones>
    </Foot>
  )
}

/*
BONUS
<p>?/? Concluidos</p>
<div className='container-icone'>
    <img src={iconeCerto} alt="?"/>
    <img src={iconeQuase} alt="?"/>
    <img src={iconeErro} alt="?"/>
</div>
*/

const Foot = styled.footer`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  p{  
    font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;}
`

const ContainerBotoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
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

const ContainerIcones = styled.div`
  img{
  margin:5px;
`