import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import FrontPage from './FrontPage'

it('Front page showing Tic Tac Toe', () => {
	render(<FrontPage />)

	expect(screen.getByText('Tic Tac Toe')).toBeVisible()
})