import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CartWidget from './CartWidget'
import {Link, NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        backgroundColor: "purple",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "white",
    },
    title: {
        flexGrow: 1,
    },
}));

export default function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root} id="navbar">
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Link to={"/"}><Typography variant="h6" className={classes.title}>
                        Yarn
                    </Typography>
                    </Link>
                    <NavLink to={"/category/mantas"}>
                        Mantas
                    </NavLink>
                    <CartWidget id="carrito" className={classes.menuButton}></CartWidget>
                </Toolbar>
            </AppBar>
        </div>
    );
}
