import React, { Component } from 'react';

import Player from './Player.js'

class Team extends Component {
    render() {
        const teamID = this.props.teamID;
        const playerCount = this.props.playerCount;

        const players = [];

        for (let i = 0; i < playerCount; i++) {
            players.push(<Player key={ i } playerID={ `${teamID}-${i}` } teamID={ teamID } />);
        }

        return (
            <div className="team">
                <div className="teamColorSelect">
                    <label>Select Color:</label>
                    <select>
                        <option value="ada">Red</option>
                        <option value="wu_shang">Blue</option>
                        <option value="brynn">Green</option>
                        <option value="teros">Yellow</option>
                    </select>
                </div>
                <div className="players">
                    { players }
                </div>
            </div>
        )
    }
}

export default Team;