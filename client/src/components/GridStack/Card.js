import React from 'react'

export const Card = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.exerciseType}</p>
        </div>
    )
}
