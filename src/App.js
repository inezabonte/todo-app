import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Todo from './components/Todo'
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  
    content: {
      height: '100vh'
    }
  }));

function App (){
    const classes = useStyles();
 
    return(
        <main className={classes.content}>
            <Router>
                <Switch>
                    <Route path='/' exact component={Todo} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/signup' exact component={Signup} />
                </Switch>
            </Router>
      </main>
        
    )
}


export default App