import React from 'react';
import {Modal, Fade, Typography, CircularProgress} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
    modal:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loader:{
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        outline: 'none',
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center'
    }

}));

function Loader (props) {

    const classes = useStyles();
    return (
        <React.Fragment>
            <Modal
            className={classes.modal}
            open={props.open}
            closeAfterTransition
            >
                <Fade in={props.open}>
                    <div className={classes.loader}>
                        <CircularProgress/>
                        <Typography>Processing ...</Typography>
                    </div>
                </Fade>
            </Modal>
        </React.Fragment>
    )
}

export default Loader;