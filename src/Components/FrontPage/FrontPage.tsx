import "./FrontPage.css"

import GameBoard from "./GameBoard/GameBoard"

const FrontPage = () => {
	return (
		<div className="front-page-flex">
			<h1>Tic Tac Toe</h1>
			<GameBoard />
		</div>
	)
}

export default FrontPage