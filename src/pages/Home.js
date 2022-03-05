import React, { useEffect, useState } from 'react'
import { getAllCatCategories } from '../api'
import CategoriList from '../components/CategoriList'

function Home() {
 
 const [cat, setCats] = useState([])

useEffect(()=>{
  getAllCatCategories().then(data=>{
    // console.log(data.data)
    setCats(data.data)
  })
},[])


  return (
    <div>
      <CategoriList cat={cat}/>
    </div>
  )
}

export default Home