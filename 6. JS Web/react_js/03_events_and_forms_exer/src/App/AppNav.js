import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
};

function AppNav(props) {
    const {classes} = props;

    return (
        <div className={classes.root}>
            <AppBar
                color="inherit"
                position="fixed">
                <Toolbar>
                    <Typography variant="h4" color="inherit" className={classes.grow}>
                        Fog Games
                    </Typography>
                    {props.user ? <Typography variant="h6" color="inherit" className={classes.grow}>
                    {/* steps16 тук имаме зададено, че когато в props се появи user това ще се включи и ще изпише името */}
                        Welcome, {props.user}!
                    </Typography> : ""}

                    {props.user ?
                        <Button
                            color="inherit"
                            onClick={props.logout}><p>Logout</p>
                        </Button>
                        :
                        <Button
                            color="inherit"
                            onClick={props.switchForm}
                        >
                            {props.loginForm ? <p>Sign Up</p> : <p>Login</p>}
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

AppNav.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNav);