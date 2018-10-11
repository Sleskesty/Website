import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';   
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Home from './Home'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Work from './Work'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Hobbies from './Hobbies'
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffbba7',
      main: '#ffab91',
      dark: '#b27765',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
      <MuiThemeProvider theme={theme}>
          <Router>
        <div className={classes.root}>
            <AppBar position="sticky">
                <Toolbar>
                <IconButton component={Link} to='/' className={classes.menuButton} color="inherit" aria-label="Menu">
               Ryley Liston
                </IconButton>
                <Button color="inherit" component={Link} to='/'>Home</Button>
                <Button color="inherit" component={Link} to='/Work'>Work</Button>
                <Button color="inherit" component={Link} to='/Hobbies'>Hobbies</Button>
                </Toolbar>
            </AppBar>
            <Route exact path='/' component={Home}/>
            <Route path='/Work' component={Work}/>
            <Route path='/Hobbies' component={Hobbies}/>
        </div> 
        </Router>
    </MuiThemeProvider>
  );
  
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);