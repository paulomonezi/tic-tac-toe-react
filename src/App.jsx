import { useState } from "react"
import "./styles.scss"

/*
  DESAFIO TÉCNICO - JOGO DA VELHA - por fernandev

  * descrição
    desenvolva um jogo da velha (tic tac toe) funcional.
    use qualquer técnica de estilização preferida: css modules, sass, styled.

  * tasks
    ? - crie um board de 3x3
    ? - dois jogadores
    ? - ao clicar em um quadrado, preencher com a jogada
    ? - avisar quando o jogo finalizar, caso dê velha avise também
    ? - fazer um risco na sequência vencedora, caso houver
*/

function App() {
  const [gameData, setGameData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])

  const handleClick = () => {
    console.log('Clicked')
  }
  return (
    <>
      <div className="board-game">
        {gameData.map((value) =>(
          <span onClick={handleClick}>{value}</span>
        ))}
      </div>
    </>
  )
}

export default App
