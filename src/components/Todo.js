import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchTasks } from '../redux/actions/TodoAction'
import { Grid, makeStyles, FormGroup, TextField, CssBaseline, Button, Slide, Snackbar } from '@material-ui/core'
import { Field, Form, Formik } from 'formik';
import { Add } from "@material-ui/icons";
import TaskCard from './TaskCard'
import { createTask, clearSnackBar } from '../redux/actions/TodoAction'
import MuiAlert from '@material-ui/lab/Alert';

const initialValues = {
    task: ''
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
    useEffect(() => {
        
        const userToken = localStorage.getItem("loginToken");
        if(!userToken){
            return props.history.push('/login');
        }
        props.fetchTasks()

    }, [])

    const classes = useStyles()

    const TransitionUp = (props) => {
        return <Slide {...props} direction="up" />;
      }

    const handleSubmition = (payload, {resetForm}) => {
        props.createTask(payload)
        resetForm({payload: ''})
    }

    const closeSnackBarTimer = () => {
        props.clearSnackBar()
      }

    return(
        
        <>
            <CssBaseline/>
            <Snackbar
                open={props.tasks.snackBarMessage.open}
                onClose={closeSnackBarTimer}
                autoHideDuration={5000}
                TransitionComponent={TransitionUp}>
                <MuiAlert 
                    severity={props.tasks.snackBarMessage.severity}
                    variant="filled"
                    elevation={6}>
                    {props.tasks.snackBarMessage.message}
                </MuiAlert>
            </Snackbar>

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
                            <Button type='submit' size="large" variant='contained' color='primary' className={classes.addButton} disabled={props.tasks.load}> <Add/> Add</Button>
                        </Form>

                    </Formik>
                </Grid>
                <Grid item md={9} sm={8} xs={12}>
                    <Grid
                     container
                     spacing={1}
                     justify='center'
                     
                    >
                            {props.tasks.pending ? skeletonData : props.tasks.tasks.map((task, index) => (
                            <Grid item md={7} sm={12} xs={12} key={task.id}>
                            <TaskCard taskName={task.task} idx={index} id={task.id} completed={task.completed}/>
                            </Grid>
                            ))}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

const mapStateToProps = state => ({
    tasks: state.todo
})

export default connect(mapStateToProps, {fetchTasks, createTask, clearSnackBar})(Todo)