import React from 'react';
import { useDispatch } from 'react-redux';
// Material UI imports
import Button from '@material-ui/core/Button';

// This function handles the Log Out Button which log outs the user
function LogOutButton(props) {
  const dispatch = useDispatch();
  return (
    <Button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      variant="contained" color="primary"
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
    </Button>
  );
}

export default LogOutButton;
