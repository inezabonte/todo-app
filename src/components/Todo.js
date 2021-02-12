import React, {useEffect} from 'react'
import { connect, useDispatch } from 'react-redux';
import { Grid, makeStyles, FormGroup, TextField, CssBaseline, Button} from '@material-ui/core'
import { Field, Form, Formik } from 'formik';
import { Add } from "@material-ui/icons";
import TaskCard from './TaskCard'
import {CREATE_TASK, FETCH_TASKS} from '../redux/actions/TodoAction'

const initialValues = {
    task: '',
    completed: false
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    addButton: {
        width:'100%',
        marginTop: theme.spacing(2)
    },
    form:{
        padding: theme.spacing(2)
    }
}))

const skeletonData = (
    <>
        <Grid item md={7} sm={12} xs={12}><TaskCard/></Grid>
        <Grid item md={7} sm={12} xs={12}><TaskCard/></Grid>
        <Grid item md={7} sm={12} xs={12}><TaskCard/></Grid>
        
    </>
    )


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

   

    const classes = useStyles()

    const handleSubmition = (payload, {resetForm}) => {
        dispatch({
            type: CREATE_TASK,
            payload: payload
        })
        resetForm({payload: ""})
    }

    return(
        <>
            <CssBaseline/>

                <Grid
                container
                spacing={2}
                className={classes.root}
                justify='center'
                >
                <Grid item md={4} sm={8} xs={12}>
                    <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmition}
                    >
                        <Form autoComplete='off' className={classes.form}>
                            <FormGroup>
                                <Field as={TextField} 
                                name= 'task'
                                fullWidth 
                                autoFocus
                                required
                                label='Create a task'
                                required={true}
                                />
                            </FormGroup>
                            <Button type='submit' size="large" variant='contained' color='primary' className={classes.addButton}> <Add/> Add</Button>
                        </Form>

                    </Formik>
                </Grid>
                <Grid item md={9} sm={8} xs={12}>
                    <Grid
                     container
                     spacing={1}
                     justify='center'
                     
                    >
                            {props.tasks && props.tasks.map((task, index) => (
                            <Grid item md={7} sm={12} xs={12} key={index}>
                            <TaskCard taskName={task.task} idx={index}  completed={task.completed}/>
                            </Grid>
                            ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

const mapStateToProps = state => ({
    tasks: state.todo.tasks
})

export default connect(mapStateToProps, null)(Todo)
