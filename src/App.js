import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Todo from './components/Todo'
import NavBar from './components/Navbar'
import SuccessPage from './components/SuccessPage'

function App (){
 
    return(
      <>
        <NavBar/>
        <Router>
            <Switch>
                <Route path='/' exact component={Todo} />
                <Route path='/login' exact component={Login} />
                <Route path='/signup' exact component={Signup} />
                <Route path='/success' exact component={SuccessPage} />
            </Switch>
        </Router>
       </> 
    )
}


export default App