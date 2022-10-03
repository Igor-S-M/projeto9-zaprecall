perguntasClicadas.includes[idx]? <PerguntaAberta 
                                idx = {idx} 
                                questions={questions} 
                                perguntasViradas={perguntasViradas} 
                                setPerguntasViradas = {setPerguntasRespondidas} /> 
                                : 
                                <PerguntaFechada
                                idx={idx}
                                setPerguntasClicadas={setPerguntasClicadas}/>




//situações em que estarão os slots das perguntas
function PerguntaFechada({ idx, setPerguntasClicadas }) {

    //Clicar na pergunta para ela abrir
    function clickPergunta(idx) {
        console.log("clickPergunta acionado")

        const novoEstado = []
        novoEstado.push(idx)


        setPerguntasClicadas(novoEstado)
    }



    return (
        <div className="fechada" onClick={() => clickPergunta(idx)} >
            <p>Pergunta {idx + 1}</p>
            <img src={play} alt="?" />
        </div>
    )
}

function PerguntaAberta({ idx, questions, perguntasViradas, setPerguntasViradas }) {


    //CLicar no icone Virar para mostrar a resposta
    function virarPergunta(idx) {
        console.log("virarPergunta(idx) Acionado")

        const novoEstado = [...perguntasViradas]
        novoEstado.push(idx)


        setPerguntasViradas(novoEstado)
    }


    return (
        <div className="aberta" >
            <p>{questions[idx].textQuestion}</p>
            <img onClick={() => virarPergunta(idx)} src={virar} alt="?" />
        </div>
    )
}

function Resposta({ idx, questions, cores, perguntasRespondidas, setPerguntasRespondidas }) {


    //Clicar em algum botao para marcar a resposta
    function responderPergunta(idx, resultado) {
        console.log("Pergunta responderPergunta acionado", resultado)

        const novoEstado = [...perguntasRespondidas, idx]


        setPerguntasRespondidas(novoEstado)

        //testes
        console.log("variavel teste para atualizar o estado:", novoEstado)
        console.log("estado dentro do componente", perguntasRespondidas)
    }

    return (
        <div className="aberta">
            <p>{questions[idx].textAnswer}</p>
            <ContainerBotoes cores={cores}>
                <button onClick={() => responderPergunta(idx, "errado")} className="vermelho">Não lembrei</button>
                <button onClick={() => responderPergunta(idx, "quase")} className="amarelo">Quase não lembrei</button>
                <button onClick={() => responderPergunta(idx, "certo")} className="verde">Zap!</button>
            </ContainerBotoes>
        </div>
    )
}

function PerguntaFechadaMarcada(idx, resultado) {

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