import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header: {
        height: '10vh'
    }
}));

const HeaderLayout = (props) => {
    const classes = useStyles();
    return (
        <header className={classes.header}></header>
    );
}

export default HeaderLayout;