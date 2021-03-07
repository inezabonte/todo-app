import React, { useState, useEffect } from "react";
import { Checkbox, Menu, Modal, Input } from 'antd'
import { EllipsisOutlined, DeleteFilled } from '@ant-design/icons'
import { Delete, Edit } from '@material-ui/icons'
import {useDispatch} from 'react-redux'
import {FETCH_TASKS, DELETE_TASK, UPDATE_TASK} from '../../redux/actions/TodoAction'

const { SubMenu } = Menu

function TaskCard(props) {
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

  const handleDelete = () => (
    dispatch({
      type: DELETE_TASK,
      index: props.idx
    })
  )


  const [open, setOpen ] = useState(false)
  const [task, setTask] = useState(props.taskName)

  const openDialog = () => {
    setOpen(true)
  }

  const closeDialog = () => {
    setOpen(false)
  }

  const onChange = (e) => {
    setTask(e.target.value)
  }

  const saveEdits = () => {
    closeDialog()
    return dispatch({
      type: UPDATE_TASK,
      payload: {task, completed: props.completed},
      index: props.idx
    })
  }

  return (
      <div>

        <Modal
        visible={open} 
        title='Edit Task'
        okText='Save'
        onOk={saveEdits}
        onCancel={closeDialog}
        okButtonProps={{disabled: !task}}
        >
            <Input
              label='Enter a new value'
              value = {task}
              onChange = {onChange}
            />
        </Modal>

        <div>
          <div>
            <Checkbox type='checkbox' onChange={handleCheckBox} checked={props.completed}>{props.taskName}</Checkbox>
          </div>
            <Menu >
              <SubMenu icon={<EllipsisOutlined/>}>
                <Menu.Item onClick={handleDelete}><DeleteFilled style={{color: 'red', fontSize: '1rem'}} /> Delete</Menu.Item>
                <Menu.Item onClick={openDialog} > <Edit color='primary'/> Edit </Menu.Item>
              </SubMenu>
            </Menu>
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
  );
}

export default TaskCard
