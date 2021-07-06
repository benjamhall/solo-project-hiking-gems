import React from 'react';
//import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
//import './Nav.css';
import {useSelector} from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Material UI Imports 
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import EditIcon from '@material-ui/icons/Edit';

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

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  // End Material UI

  const history = useHistory();
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/homePage';
    loginLinkData.text = 'Home';
  }

  let list = (
   <div className={classes.list}
    onClick={toggleDrawer}
    onKeyDown={toggleDrawer}
    role="presentation"
    >
      <List>
        <ListItem>
          <HomeIcon />
          <Link
          className={classes.text}
          component="button"
          variant="body1"
          onCLick={() => {history.push('/homePage')}}
          >
            Home
          </Link>
        </ListItem>
        <ListItem>
          <InfoIcon />
          <Link
            className={classes.text}
            component="button"
            variant="body1"
            onClick={() => {history.push('/about')}}
          >
            About
          </Link>
        </ListItem>
      </List>
    </div>
  )

  if (user.id != null) {
    list = (
      <div
      className={classes.list}
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
      role="presentation">
      
      <List>
        <ListItem>
          Welcome {user.username}
        </ListItem>
        <ListItem>
          <HomeIcon />
            <Link
              className={classes.text}
              component="button"
              variant="body1"
              onClick={() => { history.push('/') }}
            >
              Home
            </Link>
        </ListItem>
        <ListItem>
            <Link
              className={classes.text}
              component="button"
              variant="body1"
              onClick={() => { history.push('/list') }}
            >
              Best Hiking Trails
            </Link>
        </ListItem>
          <ListItem>
            <Link
              className={classes.text}
              component="button"
              variant="body1"
              onClick={() => { history.push('/add') }}
            >
              Add Hike
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className={classes.text}
              component="button"
              variant="body1"
              onClick={() => { history.push('/favorite') }}
            >
              Favorites
            </Link>
          </ListItem>
          <ListItem>
            <InfoIcon />
            <Link
              className={classes.text}
              component="button"
              variant="body1"
              onClick={() => { history.push('/about') }}
            >
              About
            </Link>
          </ListItem>
          <ListItem>
            <LogOutButton className="navLink" />
          </ListItem>
      </List>
     </div>
    )
  }
  return (
    <div className="nav">
      <IconButton onClick={toggleDrawer}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer anchor="left" open={drawer} onClose={toggleDrawer}>
        {list}
      </Drawer>
    </div>
  );

  // return (
  //   <div className="nav">
  //     <Link to="/home">
  //       <h2 className="nav-title">Hidden Hiking Gems</h2>
  //     </Link>
  //     <div>
  //       <Link className="navLink" to={loginLinkData.path}>
  //         {loginLinkData.text}
  //       </Link>

  //       {user.id && (
  //         <>
  //           <Link className="navLink" to="/info">
  //             Info Page
  //           </Link>

  //           <Link className="navLink" to="/list">
  //             Best Hiking Trails
  //           </Link>

  //           <Link className="navLink" to="/add">
  //             Add Hike
  //           </Link>

  //           <Link className="navLink" to="/favorite">
  //             Favorites
  //           </Link>

  //           <LogOutButton className="navLink" />
            
  //         </>
  //       )}

  //       <Link className="navLink" to="/about">
  //         About
  //       </Link>
  //     </div>
  //   </div>
  // );
}

export default Nav;
