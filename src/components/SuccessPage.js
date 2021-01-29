import React from 'react'
import { Typography, Container, makeStyles, Button} from '@material-ui/core'
import check from '../assets/images/check.svg'

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
        justifyContent: 'space-around',
        [theme.breakpoints.down('md')]: {
            height: '60%'
        },
        [theme.breakpoints.down('xs')]: {
            height: '70%'
        }

    },
   
    

  }))

function SuccessPage() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div className={classes.div1}>
                <img src={check} className={classes.imags} />
                <Typography variant='h5' align='center'>Account Successfully created 🎉 </Typography>
                <Button color='primary' variant='contained' href='/login' fullWidth>LOGIN TO CREATE TASKS</Button>
            </div>
               
        </Container>
    )
}

export default SuccessPage
