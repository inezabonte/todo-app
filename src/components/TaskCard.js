import React, {useState} from "react";
import { Card, CardContent, Typography, CardActions, IconButton, makeStyles, CardActionArea, Checkbox, Menu, MenuItem, Button} from '@material-ui/core'
import { Dialog, DialogContent, DialogTitle, DialogActions, TextField } from '@material-ui/core'
import { Delete, MoreHoriz, Edit } from '@material-ui/icons'
import {connect} from 'react-redux'
import { Skeleton } from '@material-ui/lab'
import {deleteTask, updateTask } from '../redux/actions/TodoAction'

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
  const handleDelete = () => {
    props.deleteTask(props.id, props.idx)
  }

  const handleCheckBox = (event) => {
    const completed = event.target.checked
    props.updateTask(props.id,{completed, task: props.taskName}, props.idx)
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

  const saveEdits = (e) => {
    props.updateTask(props.id,{task, completed: props.completed}, props.idx)
    closeDialog()
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
              {props.pending ? (<Skeleton variant='rect' width='100%'/>) 
              :
              <Typography  variant='h6' component='h2'>
                { props.taskName}
              </Typography>}
              
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

const mapStateToProps = state => ({
  pending: state.todo.pending,
  load: state.todo.load
})

export default connect(mapStateToProps, {deleteTask, updateTask})(TaskCard)