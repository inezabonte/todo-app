import React, {useState} from "react";
import { Card, CardContent, Typography, CardActions, IconButton, makeStyles, CardActionArea, Checkbox, Menu, MenuItem, Button} from '@material-ui/core'
import { Dialog, DialogContent, DialogTitle, DialogActions, TextField } from '@material-ui/core'
import { Delete, MoreHoriz, Edit } from '@material-ui/icons'
import {useDispatch} from 'react-redux'
import { Skeleton } from '@material-ui/lab'
import {DELETE_TASK, UPDATE_TASK} from '../redux/actions/TodoAction'

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#eeeeee',
    borderRadius: 0,                                                                 
  },
  CardContent:{
    display: 'flex',
    alignItems: 'center'
  }
}))

function TaskCard(props) {
  const dispatch = useDispatch()
  
  const handleDelete = () => (
    dispatch({
      type: DELETE_TASK,
      index: props.idx
    })
  )

  const handleCheckBox = (event) => {
    const completed = event.target.checked
    return dispatch({
      type: UPDATE_TASK,
      payload: {completed, task: props.taskName},
      index: props.idx
    })
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen ] = useState(false)
  const [task, setTask] = useState(props.taskName)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openDialog = () => {
    setOpen(true)
  }

  const closeDialog = () => {
    setOpen(false)
    handleClose()
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

  const classes = useStyles()
  return (
      <div>

        <Dialog open={open} onClose={closeDialog} maxWidth={'sm'} fullWidth>
          <DialogTitle>Edit Task</DialogTitle>
          <DialogContent>
            <TextField
            autoFocus
            name='task'
            label='Enter a new value'
            fullWidth
            value = {task}
            onChange = {onChange}
            required
            />
          </DialogContent>
          <DialogActions>
            <Button color='primary' onClick={closeDialog}>
              Cancel
            </Button>
            <Button color='primary' variant='contained' onClick={saveEdits} disabled={!task}>
              Save
            </Button>
          </DialogActions>
        </Dialog>

        <Card className={classes.card}>
          <CardActionArea >
            <CardContent className={classes.CardContent}>
              <Checkbox checked={props.completed} name='completed' onChange={handleCheckBox}/>
              <Typography  variant='h6' component='h2'>
                { props.taskName}
              </Typography>
              
            </CardContent>

          </CardActionArea>
          <CardActions>
            <IconButton onClick={handleClick}>
              <MoreHoriz/>
            </IconButton>
            <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
              <MenuItem onClick={handleDelete}><Delete color='secondary' />Delete</MenuItem>
              <MenuItem onClick={openDialog} > <Edit color='primary'/> Edit </MenuItem>
            </Menu>
            
          </CardActions>
        </Card>
        </div>
  );
}

export default TaskCard
