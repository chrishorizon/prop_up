import React from 'react'

const PersonCard = props => {

    const {userName, age, hairColor} = props

    return (
        <div>
            <h1>{userName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default PersonCard
