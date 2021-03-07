import React from 'react'
import AddTodo from '../AddTodo'
import { Row, Col } from 'antd'
import './style.css'

function App (){
 
    return(
        <Row
        justify='center'
        className='todo-container'
        >
            <Col
            xs={{ span: 23 }}
            sm={{ span: 23 }}
            md={{ span: 21 }}
            lg={{ span: 18 }}
            xl={{ span: 12 }}
            >
                <AddTodo/>
            </Col> 
        </Row> 
    )
}


export default App
