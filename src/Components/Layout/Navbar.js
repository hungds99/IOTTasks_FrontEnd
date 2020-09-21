// React
import React from 'react';
import { Link } from "react-router-dom";

// Material
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));

export default function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" color="inherit">
                    IOTTASKS
                </Typography>

                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                >
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/models">
                        Model
                    </Button>
                    <Button color="inherit" component={Link} to="/Objects">
                        Object
                    </Button>
                    <Button color="inherit" component={Link} to="/Places">
                        Place
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
