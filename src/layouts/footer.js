import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        height: '10vh'
    }
}));

const FooterLayout = (props) => {
    const classes = useStyles();
    return (
        <footer className={classes.footer}></footer>
    );
}

export default FooterLayout;