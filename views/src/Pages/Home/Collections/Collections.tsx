import { useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Collections.css'
import shoesHover from '../../../Assets/shoesHover.jpg'


const Collections = () => {
  return (
    <section className="collections outer container center">
        <div className="collections inner container center">
            <img src={shoesHover} alt="" />
            <h3>Comfort, Redefined.</h3>
        </div>
    </section>
  )
}

export default Collections
