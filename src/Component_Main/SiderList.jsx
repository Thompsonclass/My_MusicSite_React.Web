import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const styles = makeStyles(() => ({ //리스트 CSS
  drawer: {
    width: '300px',
    backgroundColor: 'lightgray'
  },
}));

const SiderList = () => {
  const [Open, setOpen] = useState(false); //리스트 OPEN
  const classes = styles();

  const toggleDrawer = () => { //리스트 OPEN
    setOpen(!Open);
  };

  return (
    <>
      <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={Open} onClose={toggleDrawer} className={classes.drawer}>
        <div className={classes.drawer} onClick={toggleDrawer} onKeyDown={toggleDrawer}>
          <List>
            <ListItem button component={Link} to="/home">
              <ListItemText primary="Home" /> 
            </ListItem>
            <ListItem button component={Link} to="/page1">
              <ListItemText primary="Favorites list" /> 
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default SiderList;