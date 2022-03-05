import React from 'react'
import SingleItem from './SingleItem'

function SingleList({cat}) {
  return (
    <div className='singlelist'>
        {
            cat.map((el,index)=> {
                return <SingleItem key={index} item={el} />
            })
        }
    </div>
  )
}

export default SingleList