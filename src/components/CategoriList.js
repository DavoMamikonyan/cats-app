import React from 'react'
import CategoriItem from './CategoriItem'

function CategoriList( {cat} ) {
  return (
    <div className='category_list'>
      {
        cat.map((el,index)=> {
          return <CategoriItem key={index} item={el} />
        })
      }
    </div>
  )
}

export default CategoriList