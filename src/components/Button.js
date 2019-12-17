import React from 'react'

import styled from 'styled-components'

const StyledButton = styled.button`
  display: inline;
  background-color: ${ (props) => props.color };
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  margin: 0.5em;
  padding: 16px 8px;
  border-radius: 5px;
  display: inline-block;
  border: none;
  outline:none;
  opacity: 0.8;
  transition: all 0.4s ease 0s;
  

  &:hover {    
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.4s ease 0s;
  }
`

const Button = ({ children, color, handleClick, type }) => {
// console.log('handle click', handleClick)

  return (
    <StyledButton
    type={type}
      color={color}
      onClick={handleClick}
    >  
    { children }
    </StyledButton>
  )
}

export default Button