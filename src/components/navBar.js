// import React from 'react'
// import {AppBar, Tabs, Tab} from '@material-ui/core'   
// import Toolbar from '@material-ui/core/Toolbar'

// const NavBar = () => {
//     return (
//         <div>
//             <AppBar position="static">
//   <Toolbar>
//     <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//       <MenuIcon />
//     </IconButton>
//     <Typography variant="h6" className={classes.title}>
//       News
//     </Typography>
//     <Button color="inherit">Login</Button>
//   </Toolbar>
// </AppBar>
//         </div>
//     )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link, Route, Switch } from 'react-router-dom'
import Dashboard from './dashboard'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Alquilando
          </Typography>
          <Button color="inherit"><Link to = {'/Dashboard'}> Dashboard </Link></Button>
          <Button color="inherit">Option 2</Button>
          <Button color="inherit">Option 3</Button>
          <Button color="inherit">Option 4</Button>
        </Toolbar>
        <Switch>
          <Route exact path='/Dashboard' component={Dashboard} />
        </Switch>
      </AppBar>
    </div>
  );
}



// export default NavBar