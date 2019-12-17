import React, { useState, useImperativeHandle } from 'react'
import Button from './Button'

const Togglable = React.forwardRef((props, ref) => {
  const [visibility, setVisibility] = useState(false)
  // console.log('visibility', visibility)
  

  const toggleVisibility = () => {
    // console.log('visibility pressed')    
    setVisibility(!visibility)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  const hideWhenVisible = { display: visibility ? 'none' : '' }
  const showWhenVisible = { display: visibility ? '' : 'none' }

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button
          color='#00adb5'
          handleClick={toggleVisibility}
        >
          {props.buttonLabel}
          </Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button
          color='#393e46'
          handleClick={toggleVisibility}
        >
           close 
            </Button>
      </div>
    </div>
  )
})

export default Togglable