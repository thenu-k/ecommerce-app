import React, {FC, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import LoadingIcon from '../../Models/LoadingIcon/LoadingIcon'
import './ItemPage.css'

interface IDetails {
  wtf: string
}
type Details = IDetails | undefined


//Function
const ItemPage: FC = () => {
  const params = useParams()

  //States
  const [loading, setLoading] = useState(true)
  const [details, setDetails] = useState<Details>()
  const [itemID, setItemID] = useState(params.id)

  //Fetching data
  useEffect(()=>{
    itemID                      //Because item id might not exist
      ? getItemData(itemID)      
      : console.log()     //Fix!
  }, [])

  //Get and set data function
  const getItemData = (itemID:string):void => {
    const URL = `http://localhost/item/details/${itemID}`
    fetch(URL).then(res=>{return res.json()})
    .then(data=> {
      setDetails(data)
      setLoading(false)
    })
  }

  return (
    <div id='ItemPage' className={loading.toString()}>
      {
        loading 
            ? <LoadingIcon/>
            : <LoadingIcon/>
            
      }
    </div>
  )
}

export default ItemPage