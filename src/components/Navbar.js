import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton';
import { ExitToApp } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  exitButton: {
    color: 'white'
  },
  title: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
}));

const userToken = localStorage.getItem("loginToken");



export default function NavBar(props) {
  const classes = useStyles();


  const logOut = () => {
    localStorage.removeItem('loginToken')
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Todo app
          </Typography>
          {userToken && <IconButton onClick={logOut} href='/login'>
            <ExitToApp className={classes.exitButton} />
          </IconButton>}
        </Toolbar>
      </AppBar>
      <Paper>
        <div className={classes.toolbar} />
      </Paper>
    </div>
  );
}