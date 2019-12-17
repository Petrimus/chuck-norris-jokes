import React from 'react'
import styled from 'styled-components'

const JokeLi = styled.li`
padding: 8px 16px;
margin-top: 1em;

border-top: 2px solid #00adb5;
border-bottom: 2px solid #00adb5;
background-color: #eeeeee;
font-size: 1.5em;
font-weight: 500;


&.item-enter {
  opacity: 0;
}
&.item-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}
&.item-exit {
  opacity: 1;
}
&.item-exit-active {
  opacity: 1;
  transition: opacity 500ms ease-in, transform 300ms ease-in;	
  transform:translate(-5em, 0) scale(0,0);
}
`

const Joke = (props) => {

	return (
		<JokeLi >
			{props.joke}
		</JokeLi>
	)
}

export default Joke