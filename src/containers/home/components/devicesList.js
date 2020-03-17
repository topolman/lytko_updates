import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DevicesOther from '@material-ui/icons/DevicesOther';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        [theme.breakpoints.down('md')]: {
            height: '100px'
        },
        [theme.breakpoints.up('md')]: {
            height: '80vh'
        }
    },
    header: {
        fontWeight: 600,
        padding: '12px',
        textAlign: 'left',
        alignItems: 'center',
    },
    row: {
        transition: 'all .3s ease-in',
        padding: '3px 12px',
        textAlign: 'left',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
            opacity: .7
        },
        '&.selected': {
            backgroundColor: '#464646'
        }
    }
}));

export default (props) => {
    //const {devices} = props;
    const [selected, setSelected] = React.useState('');
    const classes = useStyles();

    const DevicesRow = (props) => {
        const {device} = props;
        return (
            <Grid
                container
                item
                xs={12}
                spacing={0}
                className={[classes.row, device.branch === selected ? 'selected' : null].join(' ')}
                onClick={() => {handleSelectDevice(device.branch)}}
            >
                <Grid item xs={1}><DevicesOther /></Grid>
                <Grid item xs={6}>{!!device.branch ? device.branch : 'undefined'}</Grid>
                <Grid item xs={5}>{!!device.actualFW ? device.actualFW : 'undefined'}</Grid>
            </Grid>
        )
    };

    const handleSelectDevice = (branch) => {
        setSelected(branch);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid container item xs={12} spacing={0} className={classes.header}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={6}>Ветка устройств</Grid>
                    <Grid item xs={5}>Актуальная прошивка</Grid>
                </Grid>
                <DevicesRow device={{branch: 'Lytko Thermostat', actualFW: '07_13'}} />
                <DevicesRow device={{branch: 'Lytko Dimmer', actualFW: '01_11'}} />
                <DevicesRow device={{branch: 'Lytko Switch', actualFW: '02_22'}} />
                <DevicesRow device={{branch: 'Lytko Humidity', actualFW: '03_33'}} />
            </Grid>
        </div>
    );
}