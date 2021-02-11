import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Todo from './components/Todo'
import NavBar from './components/Navbar'

function App (){
 
    return(
      <>
        <NavBar/>
        <Router>
            <Switch>
                <Route path='/' exact component={Todo} />
            </Switch>
        </Router>
       </> 
    )
}


export default App
