import { useState } from "react";
import "./GameBoard.css"

interface GameBoardButton {
	id: number,
	symbol: string
}

const GameBoard = () => {
	const [gameBoardButtons, setGameBoardButtons] = useState<GameBoardButton[]>(Array.from({ length: 9 }, (_, i) => ({ id: i, symbol: "" })));
	const [turn, setTurn] = useState("X")

	const makeMove = (id: number) => {
		const newGameBoardButtons = gameBoardButtons.map(gameBoardButton => gameBoardButton.id !== id ? gameBoardButton : { id: id, symbol: turn })
		setGameBoardButtons(newGameBoardButtons);
		if (turn === "X") {
			setTurn("O")
		}
		else {
			setTurn("X")
		}
	}

	return (
		<div className="game-board-grid">
			{gameBoardButtons.map(button => <button onClick={() => makeMove(button.id)} className={`game-board-field ${button.symbol === "X" ? "red" : "blue"}`} key={button.id}><h3 data-testid="game-board-button-symbol" className="game-board-button">{button.symbol}</h3></button>)}
		</div>
	)
}

export default GameBoard