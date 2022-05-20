import React, {FC} from 'react'
import './Description.css'
import {Details} from '../ItemPage'


const Description:FC<Details> = (props) => {
  return (
    <section className="description outer container ItemPage">
        <h2 className='center'>{props?.details.title}</h2>
        <form action="">
          <div className="size_selection">
            {
              props?.details.sizes?.map((size)=>{
                return(
                <button onClick={()=> {}}>{size}</button>
                )
              })
            }
          </div>
          <div className="add_to_cart">
            <button>Add To Cart | {props?.details.price}</button>
          </div>
        </form>
        <p className="actual_description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident placeat iure minus facere dolorum sapiente fugiat maxime voluptatem animi dicta recusandae, at ex ipsum sint perspiciatis accusantium velit! At aliquam necessitatibus maxime eos, exercitationem laudantium alias possimus repellat recusandae, iusto nam. Facere similique quos cupiditate. Facere aspernatur ipsam temporibus quia nam alias dolores sit laudantium odio, exercitationem voluptatibus corporis pariatur!
        </p>
    </section>
  )
}

export default Description