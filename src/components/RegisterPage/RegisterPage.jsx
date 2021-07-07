import React from 'react';

import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

function RegisterPage() {

   // Material UI
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing(2),
      margin: 'auto',
    },
  }));

  const classes = useStyles();
  // End Material UI

  const history = useHistory();

  return (
    <div>
      <RegisterForm />

      <center>
        <button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </button>
      </center>
    </div>
  );
}

export default RegisterPage;
