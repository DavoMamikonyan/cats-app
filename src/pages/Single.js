import React, { useEffect, useState } from 'react'
import { getCatCategoriesById } from '../api'
import { useParams, useNavigate } from 'react-router-dom'
import SingleList from '../components/SingleList'



function Single() {
  const [cat, setCat] = useState([])
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    getCatCategoriesById(id).then(data=>{
      console.log(data.data)
      setCat(data.data)
    })
  },[])

  function handleClick() {
    navigate(-1)
  }

  return (
    
    <div>
       <button onClick={handleClick}>GO BACK</button>
       <SingleList cat={cat} />
    </div>
  )
}

export default Single