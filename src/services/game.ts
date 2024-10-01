import axios from "axios"
import config from "../utils/config"

const startGame = async () => {
	try {
		const game = await axios.get(`${config.apiUrl}/game`)
		return game.data
	}
	catch (error) {
		console.log(error)
	}
}

const makeMove = async (squareNumber: number, id: string) => {
	try {
		const updatedGame = await axios.post(`${config.apiUrl}/game`, { squareNumber, id })
		return updatedGame.data;
	}
	catch (error) {
		console.log(error)
	}
}

export default {
	startGame,
	makeMove
}