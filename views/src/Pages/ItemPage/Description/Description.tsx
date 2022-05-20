import React, {FC} from 'react'
import './Description.css'

interface IProps {
  details: any
}

const Description:FC<IProps> = (props) => {
  return (
    <section className="description outer container ItemPage">
        <h2>{props.details.title}</h2>
    </section>
  )
}

export default Description