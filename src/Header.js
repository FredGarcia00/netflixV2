import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { selectUser } from './features/UserSlice'
import { auth } from './firebase'
import "./Header.css";

function Header() {
  const user = useSelector(selectUser);
  
  const login = () => {
    if(user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link 
      to="/">
        <img
          className="header__icon"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </Link>

      <Link to={!user && "/login"} style={{textDecoration:'none'}}>
        <div onClick={login} className="header__signIn"> {user? 'Sign out': 'Sign in'} </div>
      </Link>
    </div>
  );
}

export default Header;
