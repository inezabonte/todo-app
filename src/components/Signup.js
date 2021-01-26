import React from 'react'
import { Typography, makeStyles, Divider, Box, Button, Grid} from '@material-ui/core'
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import { FormGroup, TextField, Slide, CssBaseline, Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginAction, clearSnackBar } from '../redux/actions/LoginAction'

const initialValues = {
    fullname:'',
    email: '',
    password: '',
    confirmpassword: ''
}

const loginForm = Yup.object().shape({
    fullname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid  email format").required('Required'),
    password: Yup.string().min(8, 'At least 8 characters').required('Required'),
    confirmpassword: Yup.string().required("Required").when('password', {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "passwords do not match"
        )
    })
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

function Signup(props) {
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


  return(
    <Grid 
    container
    justify='center'
    alignItems='center'
    >
      <CssBaseline/>

      
      <Grid item md={3} sm={6} xs={10}>

        
        <div className={classes.titleBox}>
        <Typography variant='h5' align='center'>Sign Up</Typography>
        <Divider/>
        </div>
        <div className={classes.createForm}>
          <Formik
          initialValues={initialValues}
          validationSchema={loginForm}
          onSubmit={handleSubmition}
          >
            {({errors, touched}) => (
              <Form className={classes.form} noValidate>
                  <FormGroup className={classes.TextField}>
                  <Field as={TextField} 
                  label='Full name'
                  name= 'fullname'
                  fullWidth 
                  autoFocus
                  required
                  variant='outlined'
                  />
                  {errors.fullname && touched.fullname ? (<div style={{textAlign: 'left', color:'red'}}>{errors.fullname}</div>) : null}
                </FormGroup>
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
                <FormGroup className={classes.TextField}>
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
                <FormGroup className={classes.TextField}>
                  <Field as={TextField}
                  type='password'
                   label='Confirm password' 
                   name='confirmpassword' 
                   required
                   fullWidth
                   variant='outlined'
                   />
                   {errors.confirmpassword && touched.confirmpassword ? (<div style={{textAlign: 'left', color:'red'}}>{errors.confirmpassword}</div>) : null}
                </FormGroup>
              <Button variant='contained' size='medium' color='primary' type="submit" className={classes.formButtons}>Sign up</Button>
          </Form>
              
            )}
          </Formik>
          <Box>
            <Typography>
              Already have an account? <Link to='/login'>Log In</Link>
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

export default Signup