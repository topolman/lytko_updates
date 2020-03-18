import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ArrowDownward from '@material-ui/icons/ArrowDownwardRounded';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflowX: 'hidden',
        overflowY: 'auto',
        [theme.breakpoints.down('md')]: {
            height: '70vh'
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
        }
    },
    download: {
        color: '#27afe9'
    }
}));

export default (props) => {
    const {devices = [], selected} = props;
    const [firmwares, setFirmwares] = React.useState([]);
    const classes = useStyles();

    React.useEffect(() => {
        const device = devices.find(device => (device.id === selected));
        if (typeof device === 'object' && !!device.firmwares && typeof device.firmwares === 'object')
            setFirmwares(device.firmwares);
    }, [devices, selected]);

    const FirmwaresRow = (props) => {
        const {firmware, n} = props;
        return (
            <Grid
                container
                item
                xs={12}
                spacing={0}
                className={classes.row}
            >
                <Grid item xs={2}>{n + 1}</Grid>
                <Grid item xs={3}>{!!firmware.name ? firmware.name : ''}</Grid>
                <Grid item xs={3}>{!!firmware.comment ? firmware.comment : ''}</Grid>
                <Grid item xs={2}>{!!firmware.version ? firmware.version : ''}</Grid>
                <Grid item xs={2}><ArrowDownward className={classes.download} /></Grid>
            </Grid>
        )
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid container item xs={12} spacing={0} className={classes.header}>
                    <Grid item xs={2}>#</Grid>
                    <Grid item xs={3}>Название прошивки</Grid>
                    <Grid item xs={3}>Комментарий</Grid>
                    <Grid item xs={2}>Версия</Grid>
                    <Grid item xs={2}></Grid>
                </Grid>
                {typeof firmwares === 'object' && firmwares.length > 0 &&
                    firmwares.map((firmware, i) => (
                        <FirmwaresRow key={i} n={i} firmware={firmware} />
                    ))
                }
                {typeof firmwares === 'object' && firmwares.length === 0 &&
                    <Grid item xs={12} className={classes.download}>- данных нет -</Grid>
                }
            </Grid>
        </div>
    );
}