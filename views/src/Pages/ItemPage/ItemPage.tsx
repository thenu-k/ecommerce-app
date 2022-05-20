import React, {FC, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const ItemPage: FC = () => {
  const params = useParams()

  //States
  const [loading, setLoading] = useState(true)
  const [itemID, setItemID] = useState(params.id)

  //Fetching data
  useEffect(()=>{
    itemID
      ? getItemData(itemID)
      : console.log()     //Fix!
  })

  //Get and set data function
  const getItemData = (itemID:string):void => {
    const URL = `http://localhost/item/details/${itemID}`
    fetch(URL).then(res=>{return res.json()})
    .then(data=> console.log(data))
  }

  return (
    <>Yo
    </>
  )
}

export default ItemPage