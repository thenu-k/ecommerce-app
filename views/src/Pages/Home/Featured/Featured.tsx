import React from 'react'
import './Featured.css'
import shoesHorizontal from '../../../Assets/shoesHorizontal.jpg'
import shoesMen from '../../../Assets/shoesMen.jpg'
import shoesWomen from '../../../Assets/shoesWomen.jpg'
import { Link } from 'react-router-dom'

const Featured = () => {
  return (
    <section className="featured container outer center">
      <div className="featured container inner">
        {/* <div className="title outer center"><h3 className='center'>Prime Picks</h3></div>
        <div className="image outer center"><img src={shoesHorizontal} alt="" /></div> */}
        <Link to='' className="forHim forThem outer center"><img src={shoesMen} alt="" /><Link to='' className='center shop'>Shop Men</Link></Link>
        <Link to='' className="forHer forThem outer center"><img src={shoesWomen} alt="" /><Link to=''  className='center shop'>Shop Women</Link></Link>
      </div>
    </section>
  )
}

export default Featured