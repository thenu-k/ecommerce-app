import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer aria-label='Footer'>
        <div className="top_section footer outer" aria-label='Top Section: About'>
            {/* <h4 class="center">About</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus similique ipsa rem itaque consequatur repellendus, incidunt, amet voluptate esse animi expedita perspiciatis dolor ratione ea error sapiente fugit quibusdam quod!</p> */}
        </div>
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