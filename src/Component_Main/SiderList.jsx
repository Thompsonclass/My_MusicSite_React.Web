import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const styles = makeStyles(() => ({
  drawer: {
    width: '300px',
    backgroundColor: 'lightgray'
  },
}));

const SiderList = () => {
  const [Open, setOpen] = useState(false);
  const classes = styles();

  const toggleDrawer = () => {
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