import React from 'react'
import styled from 'styled-components'
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

import Joke from './Joke'

const JokesUl = styled.ul`
list-style-type: none;


`


const Jokes = ({ jokes }) => {

 
  const reversed = [...jokes].reverse().splice(0, 5)
  return (
    <JokesUl>
      <TransitionGroup >
        {reversed.map((joke) => (
          <CSSTransition
            key={joke.id}
            timeout={500}
            classNames="item"
          >
            <Joke joke={joke.joke} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </JokesUl>

  )
}

export default Jokes