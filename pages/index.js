import Head from 'next/head'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { Row, Col } from 'antd'
import styles from '../styles/todo.module.css'

export default function index (){
 
    return(
        <div>
            <Head>
                <title>Todo app</title>
            </Head>
            <Row
            justify='center'
            className={styles.todo_container}
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

            <Row
            justify='center'
            className={styles.todo_container}
            >
            <Col
            xs={{ span: 23 }}
            sm={{ span: 23 }}
            md={{ span: 21 }}
            lg={{ span: 18 }}
            xl={{ span: 12 }}
            >
                <TodoList/>
            </Col> 
            </Row>
        </div>
        
           
       
    )
}


