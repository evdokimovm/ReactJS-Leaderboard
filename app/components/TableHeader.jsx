import React from 'react'

export default class TableHeader extends React.Component {
	render() {
		return (
			<tr>
				<th className="column-place">#</th>
				<th className="column-camper">Camper Name</th>
				<th className={"column-points " + (this.props.sortParameter == 'recent' ? "active" : "")} onClick={this.props.sortByRecent}>
					<span>Points in past 30 days</span>
				</th>
				<th className={"column-points " + (this.props.sortParameter == 'alltime' ? "active" : "")} onClick={this.props.sortByAllTime}>
					<span>All time points</span>
				</th>
			</tr>
		)
	}
}
