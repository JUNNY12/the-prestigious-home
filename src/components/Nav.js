import { Link } from 'react-router-dom'
import { useState } from 'react'
import './nav.css'





const Nav = () => {


    const [isNavExpanded, setIsNavExpanded] = useState(true)

    const toggleNavBar = () => {

        setIsNavExpanded(prevState => !prevState)
    }

    

    return(
    <div>
        <nav className=''>

            <ul className={isNavExpanded ? "navTexts" : "expandNav"}>
                <Link to="/" style={{textDecoration:"none"}}>
                   <li className='pageRoutes'>
                        Home
                    </li>
                </Link>

                <Link to="/services" style={{textDecoration:"none"}}>
                   <li className='pageRoutes'>
                       Services
                    </li>
                </Link>

               <Link to="/gallery" style={{textDecoration:"none"}}>
                    <li className='pageRoutes'>
                        Gallery
                     </li>
               </Link>

               <Link to="/contactUs" style={{textDecoration:"none"}}>
                   <li className='pageRoutes'>
                        Contact Us
                    </li>
               </Link>
            </ul>

            <div className='menuIcon' onClick={toggleNavBar}>
                  <i class="fa-solid fa-bars"></i>
            </div>

        </nav>
    </div>
    )
}

export default Nav