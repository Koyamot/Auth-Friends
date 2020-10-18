import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {


    const checkForToken = () => {
       localStorage.getItem("token");
       window.location.reload(false)
    }

  const signOut = () => {
    localStorage.removeItem("token");
    window.location.reload("/");
  };


    return(
        <div>
            <ul>     
        {checkForToken ? (
            <li>
                <Link to="/friends">My F.R.I.E.N.D.S.</Link>
            </li>
        ) : null}
        {localStorage.getItem("token") ? (
            <li>
                <Link to="/" onClick={signOut}>Log Out</Link>
            </li>
        ) :  
        <li>
            <Link to="/">Login</Link>
        </li>
        }      
          </ul>
          </div>
    )
}

export default Header;