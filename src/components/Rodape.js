import React from "react";
import styled from "styled-components"




export default function Rodape({ cores, icones, perguntasViradas, setPerguntasViradas,
  perguntaRespondida, setPerguntaRespondida }) {

  let perguntasRespondidasTeste = 3;
  let totalPerguntas = 8;

  function responderPergunta(corIndice) {
    /*corIndice == r || corIndice == g || corIndice == b*/
    console.log("Rodape responderPergunta acionado", corIndice)
}


  return (
    <Foot>
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


const ContainerIcones = styled.div`
  img{
  margin:5px;
  }
`