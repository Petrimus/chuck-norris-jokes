import React from 'react'
import jokeService from './services/jokes'
import Joke from './components/Joke'
import Button from 'react-bootstrap/Button'
import PersonalizeForm from './components/PersonalizeForm'
import Togglable from './components/Togglable'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      jokes: [],
      person: { firstName: 'Chuck', lastName: 'Norris' }
    }
  }
 
  getNewJoke() {
    const first = this.state.person.firstName
    const last = this.state.person.lastName
    // console.log('first ' + first)
    // console.log('last ' + last)

    if (first === 'Chuck' && last === 'Norris') {
      jokeService
        .getRandom()
        .then(response => {

          this.setState({
            jokes: this.state.jokes.concat(response)
          })
        })
        .catch(error => {
          console.log('fail')
        })
    } else {
      jokeService
        .getRandomWithName(first, last)
        .then(response => {
          this.setState({
            jokes: this.state.jokes.concat(response)
          })
        })
        .catch(error => {
          console.log('fail')
        })
    }
  }

  handleNewJokeButtonClick = () => {
    // console.log('new joke button click')
    this.getNewJoke()

  }

  handleNorrisReturn = () => {
    this.setState({ person: { firstName: 'Chuck', lastName: 'Norris' } })
  }

  addName = (event) => {
    event.preventDefault()
    this.setState({
      person: { firstName: event.target.firstName.value, lastName: event.target.lastName.value }
    })
    // console.log(this.state.person)

  }


  render() {
    const jokesToShow = 
    this.state.jokes.length < 7 ?
    this.state.jokes :
    this.state.jokes.slice(this.state.jokes.length -7, this.state.jokes.length)
    
    const transitionOptions = {
      transitionName: "fade",
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 500
    }

    return (

      <div className="container">
        <div className="header">
          <h1>Legends of {this.state.person.firstName} {this.state.person.lastName}</h1>
          <h2>(...or someone else)</h2>
        </div>
        <div className="button-container">
          <Button variant="success" onClick={this.handleNewJokeButtonClick}>a new wisdom about {this.state.person.firsName} {this.state.person.lastName}</Button>

        </div>
        <Togglable buttonLabel="personalize wisdom">
          <PersonalizeForm submit={this.addName}
            handleReturn={this.handleNorrisReturn}
          />
        </Togglable>
        <ul className="list-group">
          <ReactCSSTransitionGroup {...transitionOptions}>
            {jokesToShow.map(joke => 
              <Joke key={joke.value.id} joke={joke.value.joke} />
              )}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  }
}

export default App

