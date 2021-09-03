import React, { Component } from 'react'

export class PersonalCard extends Component {
    render() {
        // destructured prop
        // const { userName } = this.props
        return (
            <div>
                <h1>{this.props.userName}</h1>
                <p>{this.props.userAge}</p>
                <p>{this.props.userHair}</p>
            </div>
        )
    }
}

export default PersonalCard
