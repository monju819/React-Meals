import React from 'react'

const Card = (props) => {
  return (
    <div className='p-4 rounded-2xl bg-white shadow-md'>{props.children}</div>
  )
}

export default Card