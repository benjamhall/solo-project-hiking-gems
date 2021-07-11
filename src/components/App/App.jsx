import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

// // Material UI imports
// import { ThemeProvider, createTheme } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

// import Logo from '../../images/lake.png';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AddHike from '../AddHike/AddHike';
import AboutPage from '../AboutPage/AboutPage'
import EditHike from '../EditHike/EditHike';
import FavoriteHikes from '../FavoriteHikes/FavoriteHikes';
import Header from '../Header/Header';
import HikeDetails from '../HikeDetails/HikeDetails';
import HikingList from '../HikingList/HikingList';
import HomePage from '../HomePage/HomePage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Review from '../Review/Review';

import './App.css';

// Material-UI components
import '@fontsource/roboto';
import { createTheme, MuiThemeProvider } from '@material-ui/core/styles'

// create custom Material UI theme
const theme = createTheme({
  // theme settings
  palette: {
    primary: {
      main: '#364e6b',
      light: '#E1E2E1',
      dark: '#072640',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3fc2c9',
      light: '#7bf5fc',
      dark: '#009198',
      contrastText: '#000',
    },
  }
});

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div style={{ backgroundImage: "url(/lake.png)"}}>
          <Nav />
          <Header />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows HomePage else shows LoginPage
              exact
              path="/homePage"
            >
              <HomePage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Hiking List else shows LoginPage
              exact
              path="/list"
            >
              <HikingList />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Add Hike else shows LoginPage
              exact
              path="/add"
            >
              <AddHike />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Favorite Hikes else shows LoginPage
              exact
              path="/favorite"
            >
              <FavoriteHikes />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Review page else shows LoginPage
              exact
              path="/review"
            >
              <Review />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Edit Hike else shows LoginPage
              exact
              path="/edit"
            >
              <EditHike />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows Details Hike else shows LoginPage
              exact
              path="/details"
            >
              <HikeDetails />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
            >
              <UserPage />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
            >
              <InfoPage />
            </ProtectedRoute>

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              authRedirect="/user"
            >
              <LoginPage />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              authRedirect="/user"
            >
              <RegisterPage />
            </ProtectedRoute>

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              authRedirect="/user"
            >
              <LandingPage />
            </ProtectedRoute>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
