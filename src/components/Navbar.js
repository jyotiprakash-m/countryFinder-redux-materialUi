import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles((theme) => ({
    navbar: {
        flexGrow: 1,
    },
    navbackground: {
        backgroundColor: '#2940d3',
    }

}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.navbar}>
            <AppBar position="sticky">
                <Toolbar variant="dense" className={classes.navbackground}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <PublicIcon />
                    </IconButton>
                    <Typography variant="h5" color="inherit">
                        Country Finder
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
