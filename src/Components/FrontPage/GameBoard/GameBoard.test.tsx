import {screen, render, fireEvent} from '@testing-library/react'

import GameBoard from "./GameBoard"


it("Gameboard is empty when created", () => {
    render(<GameBoard />)

    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(9)

    const buttonSymbols = screen.getAllByTestId('game-board-button-symbol')
    buttonSymbols.forEach(buttonSymbol => expect(buttonSymbol.innerHTML).toContain(''))
})

describe("When gameboard is created", () => {
    beforeEach(() => {
        render(<GameBoard />)
    })
    it("Gameboard gets X symbol on first turn", () => {
        const buttons = screen.getAllByRole('button')
        fireEvent.click(buttons[0])

        const buttonSymbols = screen.getAllByTestId('game-board-button-symbol')
        expect(buttonSymbols[0].innerHTML).toContain("X")
    })

    it("Gameboard gets O symbol on second turn ", () => {
        const buttons = screen.getAllByRole('button')
        fireEvent.click(buttons[0])
        fireEvent.click(buttons[1])

        const buttonSymbols = screen.getAllByTestId('game-board-button-symbol')
        expect(buttonSymbols[1].innerHTML).toContain("O")
    })
})

