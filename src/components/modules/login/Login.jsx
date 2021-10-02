import React from 'react'
import { Grid, Container, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import './Login.css'
import { makeStyles } from '@material-ui/styles'
import fondo from '../../../assets/images/fondo.jpg'
import '../../../assets/images/Logo.jpg'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from '../dashboard/Dashboard';


const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    },
    container: {
        opacity: '0.7',
        height: '60%',
        marginTop: '10%'
    },
    div: {
        marginTop: '20%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    form: {
        width: '100%',
        marginTop: '10%'
    },

}))



const Login = () => {
    const classes = useStyles()
    return (
        <Router>
            <Grid container component='main' className={classes.root}>
                <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                    <div className={classes.div}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon color='warning' />
                        </Avatar>
                        <Typography component='h1' variant='h5'> Sing In</Typography>
                        <form className={classes.form}>
                            <TextField
                                fullWidth
                                autoFocus
                                color='primary'
                                margin='normal'
                                variant='outlined'
                                label='Nickname'
                                name='nickname'
                            />
                            <TextField
                                fullWidth
                                type='password'
                                color='primary'
                                margin='normal'
                                variant='outlined'
                                label='Password'
                                name='password'
                            />
                            <Link to="home/dashboard"><Button
                                fullWidth
                                variant='contained'
                                color='warning'
                            >
                                Sign In
                            </Button></Link>
                        </form>
                    </div>
                </Container>
                <Switch>
                    <Route path="home/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </Grid>
        </Router>

    )
}

export default Login
