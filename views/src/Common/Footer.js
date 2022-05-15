import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <footer aria-label='Footer'>
        <ul className="bottom_section footer outer" aria-label='Bottom Section: More Information'>
            <li>
                <ul>
                    <li><h5>Collections</h5></li>
                    <li><Link to=''>Lorem</Link></li>
                    <li><Link to=''>Lorem</Link></li>
                    <li><Link to=''>Lorem</Link></li>
                    <li><Link to=''>Lorem</Link></li>
                    <li><Link to=''>Lorem</Link></li>
                </ul>
            </li>
            <li>
                <ul>
                    <li><h5>Collections</h5></li>
                    <li><Link to=''>Lorem</Link></li>
                    <li><Link to=''>Lorem</Link></li>
                    <li><Link to=''>Lorem</Link></li>
                    <li><Link to=''>Lorem</Link></li>
                </ul>
            </li>
            <li>
                <ul>
                    <li><h5>Collections</h5></li>
                    <li><Link to=''>Lorem</Link></li>
                    <li><Link to=''>Lorem</Link></li>
                    <li><Link to=''>Lorem</Link></li>
                    <li><Link to=''>Lorem</Link></li>
                </ul>
            </li>
            <li>
                <ul>
                    <li><h5>Collections</h5></li>
                    <li><Link to=''>Lorem</Link></li>
                    <li><Link to=''>Lorem</Link></li>
                </ul>
            </li>
        </ul>
    </footer>
    </>
  )
}

export default Footer