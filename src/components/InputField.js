import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
display: inline-block;
text-align: left;
width: 200px;
height: 112px;
margin-left: 16px;
font-size: 24px;
`

const StyledLabel = styled.label` 
display: inline-block;
  position: relative; 
  left: 10px;
  top: -2em;  
  cursor: text;
  color: #44CFCB; 
  transition: all .3s; 
 
`

const StyledInput = styled.input`
  width: 200px;    
  height: 64px;
  margin-top: 48px;  
  background-color: transparent;
  border: none;
  border-top: 3px solid #00adb5;    
  border-bottom: 3px solid #00adb5;
  outline: none;  
  padding: 0;
  padding-left: 10px;  
  font: 400 24px "Lucida Grande"; 
  box-sizing: border-box;
  
  
  &:focus ~ ${StyledLabel},
  &:valid ~ ${StyledLabel} {
      top: -104px;
      font-size: 16px;
      transition: all .3s;
       
    } 
    `


const InputField = (props) => {
 
  return (
    <InputWrapper>
      <StyledInput 
      {...props.info.withoutReset} 
      id={props.id} 
      required      
      />
      <StyledLabel htmlFor={props.id}> {props.label} </StyledLabel>
    </InputWrapper>
  )
}

export default InputField