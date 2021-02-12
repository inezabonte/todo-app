import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  exitButton: {
    color: 'white'
  },
  title: {
    flexGrow: 1,
    textDecorationLine: 'none',
    color: 'inherit'
  },
  toolbar: theme.mixins.toolbar
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
          <Typography variant="h6" href='/' component='a' className={classes.title}>
            Todo app
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={0}>
        <div className={classes.toolbar} />
      </Paper>
    </div>
  );
}
