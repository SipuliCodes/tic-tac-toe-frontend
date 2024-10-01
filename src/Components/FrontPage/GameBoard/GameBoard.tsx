import { useState } from "react";

import gameService from "../../../services/game";
import "./GameBoard.css"

interface GameBoardButton {
	squareNumber: number,
	squareSymbol: string
}

const GameBoard = () => {
	const [gameBoardButtons, setGameBoardButtons] = useState<GameBoardButton[]>(Array.from({ length: 9 }, (_, i) => ({ squareNumber: i, squareSymbol: "" })));

	const [gameOn, setGameOn] = useState(false)
	const [gameId, setGameId] = useState("")
	const [winner, setWinner] = useState("")
	const winnerText = winner === "X" ? "X won" : winner === "O" ? "O won" : winner === "d" ? "Draw" : ""

	const makeMove = (squareNumber: number) => {
		if (gameBoardButtons[squareNumber].squareSymbol === "") {
			gameService.makeMove(squareNumber, gameId)
				.then(game => {
					console.log(game)
					if (game?.isOver) {
						setWinner(game?.winner)
					}
					setGameBoardButtons(game?.gameBoard)
				})
				.catch(error => console.log(error))
		}
	}

	const playGame = () => {
		setGameOn(true)
		gameService.startGame()
			.then(game => {
				setGameId(game?.id)
				setGameBoardButtons(game?.gameBoard)
			})
			.catch(error => console.log(error))
	}

	return (
		<div className="game-board-grid">
			{gameBoardButtons.map(button => <button onClick={() => makeMove(button.squareNumber)} className={`game-board-field ${button.squareSymbol === "X" ? "red" : "blue"}`} key={button.squareNumber}><h3 data-testid="game-board-button-symbol" className="game-board-button">{button.squareSymbol}</h3></button>)}
			{winnerText && <h3 className="game-board-winner-text">{winnerText}</h3>}
			{!gameOn && <button onClick={playGame} className="game-board-play-button"> Play</button>}
		</div>
	)
}

export default GameBoard