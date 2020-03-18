import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DevicesOther from '@material-ui/icons/DevicesOtherRounded';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        [theme.breakpoints.down('md')]: {
            height: '200px'
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
    const {devices, selected, onSelect} = props;
    const classes = useStyles();

    const DevicesRow = (props) => {
        const {device} = props;
        return (
            <Grid
                container
                item
                xs={12}
                spacing={0}
                className={[classes.row, device.id === selected ? 'selected' : null].join(' ')}
                onClick={() => {handleSelectDevice(device.id)}}
            >
                <Grid item xs={2}><DevicesOther /></Grid>
                <Grid item xs={6}>{!!device.branch ? device.branch : 'undefined'}</Grid>
                <Grid item xs={4}>{!!device.actualFW ? device.actualFW : 'undefined'}</Grid>
            </Grid>
        )
    };

    const handleSelectDevice = (deviceId) => {
        onSelect(deviceId);
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid container item xs={12} spacing={0} className={classes.header}>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6}>Ветка устройств</Grid>
                    <Grid item xs={4}>Актуальная прошивка</Grid>
                </Grid>
                {typeof devices === 'object' && devices.length > 0 &&
                    devices.map((device, i) => (
                        <DevicesRow key={i} device={device} />
                    ))
                }
            </Grid>
        </div>
    );
}