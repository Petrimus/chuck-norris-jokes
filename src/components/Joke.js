import React from 'react'

const Joke = (props) => {
	
	return (		
		<li className="list-group-item list-group-item-secondary" style={{marginBottom: 5}}>
		{props.joke} 
		</li>		
	)
}

export default Joke