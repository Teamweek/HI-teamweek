import React, {Component, PropTypes} from 'react';

export default class Intro extends Component {

	render() {
		return (

				<div className="intro right-pane">

					<div className="pattern-1" />
					<div className="pattern-2" />

					<div className="logos">
						<span>Made by teams at</span>
						<div>
							<img src="images/hyperisland.png" />
							<img src="images/teamweek.png" />
						</div>
					</div>

					<div className="verticle-center">
						<h1>A toolbox to help cross disciplinary teams collaborate</h1>
						<p>
						Are you on a brand new team? Does your current team need a boost? The #HITeamWeek tools for teams toolbox provides teams with the knowledge and tools to successfully set up team structures and maintain them throughout the course of a team collaboration. The #HITeamWeek toolbox is the outcome of a collaborative effort by Hyper Island UK’s Digital Media Management and Digital Experience Design MA degree students and Teamweek.
						</p>
					</div>

				</div>

		);
	}
}
