import React from 'react'

export default class CampersList extends React.Component {
	render() {
		return (
			<tr className="camper">
				<td className="column-place">{this.props.index}</td>
				<td className="column-camper">
					<img src={this.props.camper.img} />
					<a href={"https://www.freecodecamp.com/" + this.props.camper.username} target="_blank">
						{this.props.camper.username}
					</a>
				</td>
				<td className="column-points">{this.props.camper.recent}</td>
				<td className="column-points">{this.props.camper.alltime}</td>
			</tr>
		)
	}
}
