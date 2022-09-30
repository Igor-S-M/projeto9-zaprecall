import styled from "styled-components"
import Cabecalho from "./Cabecalho.js"
import Deck from "./Deck.js"
import Rodape from "./Rodape.js"
import iconeCerto from "./img/icone_certo.png"
import iconeErro from "./img/icone_erro.png"
import iconeQuase from "./img/icone_quase.png"
import React from "react"



export default function ScreenContainer(props) {

    const cores = {
        verde : "#2FBE34",
        amarelo:"#ff922e",
        vermelho:"#ff3030"
    }

    const icones = {certo:iconeCerto,
                    erro:iconeErro,
                    quase:iconeQuase}

    const [perguntas, setPerguntas] = React.useState([])

    return (
        <Screen>
            <Cabecalho />
            <Deck questions={props.questions} cores={cores} icones={icones} perguntas = {perguntas} setPerguntas = {setPerguntas}/>
            <Rodape cores={cores} icones={icones} perguntas = {perguntas} setPerguntas = {setPerguntas}/>
        </Screen>
    )
}


const Screen = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`