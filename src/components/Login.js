import React, { useEffect } from 'react'
import { Typography, makeStyles, Divider, Box, Button, Grid} from '@material-ui/core'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { FormGroup, TextField, Slide, CssBaseline, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginAction, clearSnackBar } from '../redux/actions/LoginAction'

const initialValues = {
  email: '',
  password: ''
}

const loginForm = Yup.object().shape({
  email: Yup.string().email("Invalid  email format").required('Required'),
  password: Yup.string().min(8, 'At least 8 characters').required('Required')
})

const useStyles = makeStyles((theme) => ({
  titleBox: {
    marginBottom: theme.spacing(5)
  },
  form: {
    marginTop: theme.spacing(1),
    width: '100%'
  },
  TextField: {
    marginBottom: theme.spacing(2)
  },
  formButtons: {
    marginTop: theme.spacing(4),
    width: '100%'
  }
}))


function Login (props) {

  useEffect(() => {
    const userToken = localStorage.getItem("loginToken");
        if(userToken){
            props.history.push('/');
        }
  }, [])

  const classes = useStyles()


  const handleSubmition = (payload, {resetForm}) => {
    props.LoginAction(payload)
    
  }

  const TransitionUp = (props) => {
    return <Slide {...props} direction="up" />;
  }

  const closeSnackBarTimer = () => {
    props.clearSnackBar()
  }


  if(props.login.success){
    props.history.push('/')
  }

  return(
    <Grid 
    container
    justify='center'
    alignItems='center'
    >
      <CssBaseline/>

      <Snackbar
      open={props.login.snackBarMessage}
      onClose={closeSnackBarTimer}
      autoHideDuration={5000}
      TransitionComponent={TransitionUp}>
          <MuiAlert 
          severity="error" 
          variant="filled"
          elevation={6}>
          {props.login.error}
          </MuiAlert>
      </Snackbar>

      <Grid item md={3} sm={6} xs={10}>

        
        <div className={classes.titleBox}>
        <Typography variant='h5' align='center'>Log in to access your tasks</Typography>
        <Divider/>
        </div>
        <div className={classes.createForm}>
          <Formik
          initialValues={initialValues}
          validationSchema={loginForm}
          onSubmit={handleSubmition}
          >
            {({errors, touched}) => (
              <Form className={classes.form} autoComplete='off'>
                <FormGroup className={classes.TextField}>
                  <Field as={TextField} 
                  label='Email'
                  name= 'email'
                  type='email' 
                  fullWidth 
                  autoFocus
                  required
                  variant='outlined'

                  />
                  {errors.email && touched.email ? (<div style={{textAlign: 'left', color:'red'}}>{errors.email}</div>) : null}
                </FormGroup>
                <FormGroup>
                  <Field as={TextField}
                  type='password'
                   label='Password' 
                   name='password' 
                   required
                   fullWidth
                   variant='outlined'

                   />
                   {errors.password && touched.password ? (<div style={{textAlign: 'left', color:'red'}}>{errors.password}</div>) : null}
                </FormGroup>
              <Button variant='contained' size='medium' color='primary' type="submit" className={classes.formButtons} disabled={props.login.pending}>Log In</Button>
          </Form>
              
            )}
          </Formik>
          <Box>
            <Typography>
              Don't have an account? <Link to='/signup'>Sign up</Link>
            </Typography>
          </Box>
        </div>
      </Grid>
      
    </Grid>
  )
}

const mapStateToProps = state => ({
  login: state.login
})

export default connect(mapStateToProps, {LoginAction, clearSnackBar})(Login)