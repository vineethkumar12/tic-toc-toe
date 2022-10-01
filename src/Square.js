import React from 'react'

export const Square = ({className,gamestate,onClick}) => {
  return (
    <div className=' '> 
    <h1 className={className} onClick={onClick}>
        {gamestate}
    </h1>
  
  
    </div>
  )
}
