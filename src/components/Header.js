import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
font-size: 48px;
font-weight: 900;
text-align: center;
color: 222831;
`

const StyledHeaderTwo = styled.h2`
font-size: 32px;
font-weight: 700;
text-align: center;
color: 222831;
`

const Header = (props) => (
  <div>
    <StyledHeader>Legends of {props.first} {props.last}</StyledHeader>
    <StyledHeaderTwo>(...or anyone you choose)</StyledHeaderTwo>
  </div>
)

export default Header