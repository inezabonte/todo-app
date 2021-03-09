import React, {useEffect } from "react";
import { Checkbox, Card, Button, List, Tooltip} from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import {useDispatch, connect} from 'react-redux'
import {FETCH_TASKS, DELETE_TASK, UPDATE_TASK} from '../../redux/actions/TodoAction'

function TodoList(props) {
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

  const handleDelete = (index) => (
    dispatch({
      type: DELETE_TASK,
      index
    })
  )

  const handleCheckBox = (e) => {
    const completed = e.target.checked
    return dispatch({
      type: UPDATE_TASK,
      payload: {completed, task: e.target.value},
      index: e.target.id
    })
  }

  return (
      <Card title='Todo List'>
        
        <List
            dataSource={props.tasks}
            renderItem={(item, index) => (
                <List.Item>
                    <Checkbox onChange={handleCheckBox} checked={item.completed} value={item.task} id={index}>{item.task}</Checkbox>
                    <Button onClick={() => handleDelete(index)} shape='circle' id={index} icon={<DeleteOutlined style={{color: 'red'}}/>}/>
                </List.Item>
            )}
            />
      </Card>
  );
}

const mapStateToProps = state => ({
  tasks: state.todo.tasks
})

export default connect(mapStateToProps, null)(TodoList)
