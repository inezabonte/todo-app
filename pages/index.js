import Head from 'next/head'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import { Row, Col, Layout, Typography } from 'antd'
import styles from '../styles/todo.module.css'

const { Header } = Layout
const { Title } = Typography
export default function index (){
 
    return(
        <div>
            <Head>
                <title>Todo app</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel='manifest' href='/manifest.json' />
                <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
                <link rel='icon' href='/images/favicon-16x16.png' type='image/png' sizes='16x16' />
                <link rel='icon' href='/images/favicon-32x32.png' type='image/png' sizes='32x32' />
                <link rel='apple-touch-icon' href='/images/apple-touch-icon.png' />
                <meta name='theme-color' content='#ffffff' />
            </Head>
            <Header className={styles.header}>
                <Title level={3} style={{margin: 0}} >Todo app</Title>
            </Header>
            <Row
            justify='center'
            className={styles.todo_container}
            >
                <Col
                xs={{ span: 24 }}
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
            >
            <Col
            xs={{ span: 24 }}
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


