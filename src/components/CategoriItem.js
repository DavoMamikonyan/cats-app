import React from 'react'
import { Link } from 'react-router-dom'

function CategoriItem( {item} ) {
  return (
    <div className='container'>
        <div className='category_item'>
          <h3>{item.id}</h3>
          <h2>{item.name}</h2>
          <button><Link to={`/single/${item.id}`}>CLick</Link></button>
        </div>
    </div>
    
  )
}

export default CategoriItem