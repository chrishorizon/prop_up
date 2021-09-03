import React, { Component } from 'react';
import styles from './PersonalCard.module.css';

export class PersonalCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    newAge = () => {
        this.setState({ age: this.state.age + 1});
    }
    
    render() {
        // destructured prop
        // const { userName } = this.props
        return (
            <div>
                <h1>{this.props.userName}</h1>
                <p>Age: {this.state.age}</p>
                <p>{this.props.userHair}</p>
                <button className={styles.btn} onClick={this.newAge}>Birthday Button for {this.props.userName}</button>
            </div>
        )
    }
}

export default PersonalCard
