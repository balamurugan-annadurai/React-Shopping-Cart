import React, { useEffect, useState } from 'react'
import Cart from './Cart'

//Header Component
const Header = ({ productCount }) => {
 // Initialize 'isScroll' state variable to false and provide 'setIsScroll' function to update it.
  const [isScroll, setIsScroll] = useState(false); 

  // Add an event listener to update 'isScroll' state based on window scroll position
  useEffect(() => {
    function handleScroll(){
      if (window.scrollY > 50) {
        setIsScroll(true);
      }
      else {
        setIsScroll(false);
      }
    }
    window.addEventListener("scroll",handleScroll)

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[]) // Empty dependency array ensures this effect runs only once
  

  return (
    <header className={isScroll && 'scrolled'}>
      <div className='header'>
        <div className="left">
          <h1>logo</h1>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li class="nav-item dropdown">

              <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a><ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#!">All watches</a></li>
                <li><a className="dropdown-item" href="#!">Apple watches</a></li>
                <li><a className="dropdown-item" href="#!">Latest launch</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <Cart productCount={productCount} />
      </div>
    </header>

  )
}

export default Header