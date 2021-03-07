import React, {useEffect, useState} from 'react'
import { connect, useDispatch } from 'react-redux';
import { Form, Button, Input, Typography, List, Checkbox, Layout } from 'antd'
import TaskCard from './TaskCard'
import {CREATE_TASK, FETCH_TASKS, DELETE_TASK, UPDATE_TASK} from '../redux/actions/TodoAction'

const initialValues = {
    task: '',
    completed: false
}

const { Title } = Typography
const { Header } = Layout
function Todo(props){
    const dispatch = useDispatch()

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"))
        if(storedTasks != null){
            dispatch({
                type: FETCH_TASKS,
                payload: storedTasks
            })
        }

    }, [])

    const handleSubmition = (payload) => {
        dispatch({
            type: CREATE_TASK,
            payload: payload
        })
    }

    const handleCheckBox = (e) => {
        const completed = e.target.checked
        return dispatch({
          type: UPDATE_TASK,
          payload: {completed, task: e.target.value},
          index: e.target.id
        })
      }
    

    return(

        <div>
            <Header>
                <Title> Todo App </Title>
            </Header>
            <div>
                <Form
                onFinish = {handleSubmition}
                initialValues={initialValues}
                >
                    <Form.Item name='task'>
                        <Input
                        placeholder='Create a task'
                        required
                        />
                    </Form.Item>
                <Button htmlType='submit' type='primary'>Add</Button>
            </Form>

            </div>

            <List
            dataSource={props.tasks}
            renderItem={(item, index) => (
                <List.Item>
                    <Checkbox onChange={handleCheckBox} checked={item.completed} value={item.task} id={index}>{item.task}</Checkbox>
                </List.Item>
            )}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    tasks: state.todo.tasks
})

export default connect(mapStateToProps, null)(Todo)

