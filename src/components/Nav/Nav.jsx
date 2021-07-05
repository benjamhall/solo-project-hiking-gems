import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
import {useSelector} from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Material UI Imports 
import { makeStyles } from '@material-ui/core/styles';

function Nav() {
  // Material UI
  const useStyles = makeStyles({
    list: {
      width: "13em",
      backgroundColor: '#3fc2c9',
    },
    text: {
      color: '#000'
    }
  });

  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/homePage';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Hidden Hiking Gems</h2>
      </Link>
      <div>
        <Link className="navLink" to={loginLinkData.path}>
          {loginLinkData.text}
        </Link>

        {user.id && (
          <>
            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <Link className="navLink" to="/list">
              Best Hiking Trails
            </Link>

            <Link className="navLink" to="/add">
              Add Hike
            </Link>

            <Link className="navLink" to="/favorite">
              Favorites
            </Link>

            <LogOutButton className="navLink" />
            
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;
