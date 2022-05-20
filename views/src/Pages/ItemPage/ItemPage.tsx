import React, {FC, useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import LoadingIcon from '../../Models/LoadingIcon/LoadingIcon'
import './ItemPage.css'
import Gallery from './Gallery/Gallery'
import Description from './Description/Description'

interface IDetails {
  details: {
    title: string,
    sizes:number[],
    price: string,
    primary_img: string
  }
}
type Details = IDetails | undefined


//Function
const ItemPage: FC = () => {
  const params = useParams()

  //States
  const [loading, setLoading] = useState(true)
  const [details, setDetails] = useState<Details>()

  //Fetching data
  useEffect(()=>{
    params.id                      //Because item id might not exist
      ? getItemData(params.id)      
      : console.log()     //Fix!
  }, [params.id])

  //Get and set data function
  const getItemData = (id:any):void => {
    const URL = `http://localhost/item/details/${id}`
    fetch(URL).then(res=>{return res.json()})
    .then(data=> {
      setDetails(data)
      setLoading(false)
    })
  }

  return (
    <section id='ItemPage' className={loading.toString()}>
      {
        loading
            ? <LoadingIcon/>
            //@ts-ignore
            : <><Gallery details={details}/> <Description details={details}/></>
            
      }
    </section>
  )
}

export default ItemPage