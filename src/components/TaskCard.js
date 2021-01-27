import React from "react";
import { Card, CardContent, Typography, CardActions, IconButton, makeStyles, CardActionArea, Checkbox } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import {connect} from 'react-redux'
import { Skeleton } from '@material-ui/lab'
import { fetchTasks, deleteTask, updateTask } from '../redux/actions/TodoAction'

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

  const classes = useStyles()
  return (
      <div className={classes.root}>

        <Card className={classes.card}>
          <CardActionArea >
            <CardContent className={classes.CardContent}>
              <Checkbox checked={props.completed} name='completed' onChange={handleCheckBox}/>
              <Typography  variant='h6' component='h2'>
                {props.pending ? (<Skeleton variant='text'/>) : props.taskName}
              </Typography>
            </CardContent>

          </CardActionArea>
          <CardActions>
            <IconButton onClick={handleDelete} disabled={props.load}>
              <Delete color='secondary'/>
            </IconButton>
          </CardActions>
        </Card>
        </div>
  );
}

const mapStateToProps = state => ({
  pending: state.todo.pending,
  load: state.todo.load
})

export default connect(mapStateToProps, {fetchTasks, deleteTask, updateTask})(TaskCard)