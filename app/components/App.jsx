import React from 'react'
import Header from './Header'
import Leaderboard from './Leaderboard'

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
					<Leaderboard />
			</div>
		)
	}
}
