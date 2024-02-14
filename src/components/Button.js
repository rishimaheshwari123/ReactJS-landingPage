import React from 'react'

function Button({title}) {
  return (
    <div className='Button'>
        <button>{title}<span>1999</span></button>
    </div>
  )
}

export default Button