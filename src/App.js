import React from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Todo from './components/Todo'

function App (){
 
    return(
      <>
        <Router>
            <Switch>
                <Route path='/' exact component={Todo} />
            </Switch>
        </Router>
       </> 
    )
}


export default App
