import React, { useEffect } from "react";
import { Checkbox, Card, Button, List, Typography} from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import {deleteTask, updateTask, fetchTasks} from '../redux/actions/action'

const { Text } = Typography

function TodoList(props) {  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"))
    if(storedTasks != null){
        props.fetchTasks(storedTasks)
    }

}, [])

  const handleDelete = (index) => (
    props.deleteTask(index)
  )

  const handleCheckBox = (e) => {
    const completed = e.target.checked
    const payload = {completed, task: e.target.value}
    const index = e.target.id
    props.updateTask(payload, index)
  }

  return (
      <Card>
        <List
            dataSource={props.tasks}
            renderItem={(item, index) => (
                <List.Item>
                    <Checkbox onChange={handleCheckBox} checked={item.completed} value={item.task} id={index}>
                      <Text delete={item.completed} disabled={item.completed}>
                        {item.task}
                      </Text>
                    </Checkbox>
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

export default connect(mapStateToProps, { deleteTask, updateTask, fetchTasks })(TodoList)
