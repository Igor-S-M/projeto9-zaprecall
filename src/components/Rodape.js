import React, { useState } from "react";
import styled from "styled-components"
import questions from "./questions";
import Imagem from "./Imagem";



export default function Rodape({ icones, perguntasRespondidas, progresso }) {



    //estados dos icones : certo, quase, certo
    const [iconeProgresso, setIconeProgresso] = useState("")

  //i é a chave, ou idx 


  let totalPerguntas = Object.keys(questions).length

  return (
    <Foot>
      <p>{progresso}/{totalPerguntas} Concluidos</p>
      <div>
        {Object.keys(perguntasRespondidas).map((k,v)=>{
          <Imagem perguntasRespondidas={perguntasRespondidas} icones={icones} k={k} iconeProgresso={iconeProgresso} setIconeProgresso={setIconeProgresso}/>
        })}
      </div>
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


