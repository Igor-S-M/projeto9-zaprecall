import styled from "styled-components"
import logo from "./img/logo.png"


export default function Cabecalho() {
    return (
        <Cabeca>
            <img src={logo} alt='?'></img>
            <p>ZapRecall</p>
        </Cabeca>
    )
}

const Cabeca = styled.header`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
  width: 52px;
  }
  
  p {
  font-family: 'Righteous';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #FFFFFF;
  margin-left: 20px;
}
`