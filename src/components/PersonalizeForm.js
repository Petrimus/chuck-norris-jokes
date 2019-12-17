import React from 'react'
import styled from 'styled-components'

// import field hook
import { useField } from '../hooks/field'

import Button from './Button'
import InputField from './InputField'

const StyledForm = styled.form` 
  display: flex;
  align-items: flex-end;
  justify-content: center; 
  margin-bottom: 1em;
 `

const PersonalizeForm = (props) => {
  const firstName = useField('text')
  const lastName = useField('text')

  console.log(firstName.value)
  const formSubmit = (event) => {
    event.preventDefault()
    props.submit(firstName.value, lastName.value)
    firstName.reset()
    lastName.reset()
  }
  console.log('props person', props.person)


  return (
    <React.Fragment>
      <StyledForm onSubmit={formSubmit} >
        <InputField
          info={firstName}
          id='first'
          label='First name' />
        <InputField
          info={lastName}
          id='last'
          label='Last name'
        />
        <Button
          type='submit'
          color='#00adb5'
        >
          rename
      </Button>
      </StyledForm>
      {props.person !== 'Chuck,Norris' &&
        <Button
          color='#00adb5'
          handleClick={props.handleReturn}
        >
          set name back to Chuck Norris
        </Button>
      }
    </React.Fragment>
  )
}

export default PersonalizeForm