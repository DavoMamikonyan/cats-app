import React from 'react'

function SingleItem( {item} ) {
  return (
          <div className='cat'>
              <div>
                <img src={item.url} />
              </div>
          </div>
    
  )
}

export default SingleItem