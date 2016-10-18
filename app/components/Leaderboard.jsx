import React from 'react'
import TableHeader from './TableHeader'
import CampersList from './CampersList'

import style from '../scss/leaderboard.scss'

export default class Leaderboard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			recent: [],
			alltime: [],
			sortParameter: 'recent'
		}
	}
	componentDidMount() {
		fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
			.then((res) => {
				res.json().then((data) => {
					this.setState({
						recent: data
					})
				})
			})
			.catch((err) => {
				console.log(err)
			})

		fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
			.then((res) => {
				res.json().then((data) => {
					this.setState({
						alltime: data
					})
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}
	setSortParameter(key) {
		this.setState({
			sortParameter: key
		})
	}
	render() {
		return (
			<table className="leaderboard">
				<thead>
					<TableHeader sortParameter={this.state.sortParameter} sortByRecent={this.setSortParameter.bind(this, 'recent')} sortByAllTime={this.setSortParameter.bind(this, 'alltime')}></TableHeader>
				</thead>
				<tbody>
					{this.state[this.state.sortParameter].map(function(camper, index) {
						return <CampersList key={camper.username} camper={camper} index={index + 1}></CampersList>
					})}
				</tbody>
			</table>
		)
	}
}
