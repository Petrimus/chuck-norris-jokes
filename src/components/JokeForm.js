import React from 'react'

const JokeForm = (props) => {

    return (
        <div>
          <button onClick={props.handleButtonClick}>
            new joke
          </button>
        </div>
    )
}

export default JokeForm