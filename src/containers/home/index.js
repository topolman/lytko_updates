import React from 'react';
import DevicesList from './components/devicesList';

import {makeStyles} from '@material-ui/core/styles';
import {Paper} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: 'white',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#27afe9',
        backgroundColor: '#2f2f2f'
    },
    left: {
        [theme.breakpoints.down('md')]: {
            height: '100px'
        },
        [theme.breakpoints.up('md')]: {
            height: '80vh'
        }
    },
    right: {
        [theme.breakpoints.down('md')]: {
            height: '70vh'
        },
        [theme.breakpoints.up('md')]: {
            height: '80vh'
        }
    }
}));

export default (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item lg={4} xs={12} sm={12} md={4}>
                    <Paper className={[classes.paper, classes.left].join(' ')}>
                        <DevicesList />
                    </Paper>
                </Grid>
                <Grid item lg={8} xs={12} sm={12} md={8}>
                    <Paper className={[classes.paper, classes.right].join(' ')}>xs=9</Paper>
                </Grid>
            </Grid>
        </div >
    );
}