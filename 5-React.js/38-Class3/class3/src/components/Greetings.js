import React from 'react'

function Greetings(props) {
    return (
        <div>
            <h1>Hello Everyone from <span style={{backgroundColor: 'green', color: props.color}}>{props.name}</span></h1>
        </div>
    )
}


export default Greetings
