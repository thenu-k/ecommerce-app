import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Search = () => {
  const params = useParams()
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)
  console.log("Rendered!")

  useEffect(() => {
    console.log("Inside useEffect!")
  }, [count])
  return (
    <>
      {count}
      <button onClick={()=>setCount(count+1)}>Yo</button>
      {count2}
      <button onClick={()=>setCount2(count2+1)}>Yo2</button>
    </>
  )
}

export default Search