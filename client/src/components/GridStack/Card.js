import React from 'react'

export const Card = props => {
    const { info } = props

    return (
        <div>
            <h3>{info.title}</h3>
            <p>{info.exerciseType}</p>
        </div>
    )
}
