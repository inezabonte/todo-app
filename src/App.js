import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Todo from './components/Todo'
import NavBar from './components/Navbar'

function App (){
 
    return(
      <>
        <NavBar/>
        <Router>
            <Switch>
                <Route path='/' exact component={Todo} />
                <Route path='/login' exact component={Login} />
                <Route path='/signup' exact component={Signup} />
            </Switch>
        </Router>
       </> 
    )
}


export default App