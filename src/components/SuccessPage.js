import React from 'react'
import { Typography, Container, makeStyles, Button} from '@material-ui/core'
import check from '../assets/images/check.svg'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh'
    },
    div1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height:"40%",
        justifyContent: 'space-around'
    },
   
    

  }))

function SuccessPage() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.div1}>
                <img src={check} className={classes.imags} />
                <Typography variant='h5' align='center'>Account Successfully created 🎉 </Typography>
                <Button color='primary' variant='outlined' href='/login' fullWidth>LOGIN TO VIEW YOUR TASKS</Button>
            </div>
               
        </Container>
    )
}

export default SuccessPage
