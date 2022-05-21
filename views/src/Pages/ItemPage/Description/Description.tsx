import React, {ChangeEvent, FC, useState} from 'react'
import './Description.css'
import {Details} from '../ItemPage'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../../StateManager/mainSlice'


const Description:FC<Details> = (props) => {

  //States
  const [size, setSize] = useState(null)

  //Redux cart state
  const dispatch = useDispatch()

  //Select size function
  const selectSize = (e:any):void =>{
    document.querySelectorAll('.size_selection button')?.forEach(button=>{if(button!=e.target){button.classList.remove('highlight')}})
    if(e.target.classList.contains('highlight')){e.target.classList.remove('highlight')}else{e.target.classList.toggle('highlight')}
    setSize(e.target.innerHTML)
  }

  //Add to cart function
  const handleAddToCart = (e:any):void => {
    e.preventDefault()
    const itemDetails = props.details
    const wantedSize = size
    const details ={
      id: itemDetails.id,
      title: itemDetails.title,
      price: itemDetails.price,
      size: size
    }
    const payload = {
      add: true, qty: 1, itemDetails: details
    }
    dispatch(cartActions(payload))
  }

  return (
    <section className="description outer container ItemPage">
        <h2 className='center'>{props?.details.title}</h2>
        <form onSubmit={(e)=>handleAddToCart(e)}>
          <div className="size_selection">
            {
              props?.details.sizes?.map((size)=>{
                return(
                <button key={props.details.id} type="button" onClick={(e)=> {selectSize(e)}}>{size}</button>
                )
              })
            }
          </div>
          <div className="add_to_cart">
            <button type="submit">Add To Cart | {props?.details.price}</button>
          </div>
        </form>
        <p className="actual_description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident placeat iure minus facere dolorum sapiente fugiat maxime voluptatem animi dicta recusandae, at ex ipsum sint perspiciatis accusantium velit! At aliquam necessitatibus maxime eos, exercitationem laudantium alias possimus repellat recusandae, iusto nam. Facere similique quos cupiditate. Facere aspernatur ipsam temporibus quia nam alias dolores sit laudantium odio, exercitationem voluptatibus corporis pariatur!
        </p>
    </section>
  )
}

export default Description