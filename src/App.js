import React, { useState } from 'react'
// import styles
import AppWrapper from './styles/AppWrapper'

// import components
import Header from './components/Header'
import jokeService from './services/jokes'
import Jokes from './components/Jokes'
import Button from './components/Button'
import PersonalizeForm from './components/PersonalizeForm'
import Togglable from './components/Togglable'


const App = () => {

  const [jokes, setJokes] = useState([])
  const [person, setPerson] = useState(['Chuck', 'Norris'])
  const personFormRef = React.createRef()

  console.log('jokes', jokes)
  console.log('person', person)
  
const fullPerson = person.toString()

  const getNewJoke = () => {
    console.log('get joke fired')

    if (person[0] === '' && person[1] === '') {
      return
    }
    if (fullPerson === 'Chuck,Norris') {
      jokeService
        .getRandom()
        .then(response => {
          setJokes(jokes.concat(response.value)
          )
        })
        .catch(error => {
          console.log('fail')
        })
    } else {
      jokeService
        .getRandomWithName(person[0], person[1])
        .then(response => {
          setJokes(jokes.concat(response.value)
          )
        })
        .catch(error => {
          console.log('fail')
        })
    }
  }

  const handleNewJokeButtonClick = () => {
    getNewJoke()
  }

  const handleNorrisReturn = () => {
    console.log('norris return')
    
    setPerson([
      'Chuck', 'Norris'
    ])
  }

  const addName = (first, last) => {
    personFormRef.current.toggleVisibility()
    setPerson([
      first, last
    ])
  }

  console.log('render')

  return (

    <AppWrapper>
      <Header first={person[0]} last={person[1]} />

      <Button
        handleClick={handleNewJokeButtonClick}
        color='#393e46'
      >
        a new wisdom about {person[0]} {person[1]}
      </Button>

      <Togglable
        buttonLabel="personalize wisdom"
        ref={personFormRef}
      >
        <PersonalizeForm
          submit={addName}
          handleReturn={handleNorrisReturn}
          person={fullPerson}
        />
      </Togglable>

      <Jokes jokes={jokes} />

    </AppWrapper>
  )
}


export default App

