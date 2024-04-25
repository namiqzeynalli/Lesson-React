import React from 'react'

const Click = () => {
    const handleClick = () => {
        console.log("Button click!")
    }

  return (
    <>
    <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default Click