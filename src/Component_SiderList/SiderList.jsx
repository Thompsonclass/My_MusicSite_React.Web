import React, {useState} from 'react';
import {Drawer, List, ListItem, ListItemText, IconButton} from '@material-ui/core';
import {styles} from '../Styled/ReadSiderList.styled';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const SiderList = () => {
    const [Open, setOpen] = useState(false); //리스트 OPEN
    const classes = styles();

    const toggleDrawer = () => { //리스트 OPEN
        console.log("슬라이드 리스트 클릭");
        setOpen(!Open);
    };

    return (
        <> < IconButton edge = "start" color = "inherit" onClick = {
            toggleDrawer
        } > <MenuIcon/>
    </IconButton>
    <Drawer
        anchor="left"
        open={Open}
        onClose={toggleDrawer}
        className={classes.drawer}>
        <div className={classes.drawer} onClick={toggleDrawer} onKeyDown={toggleDrawer}>
            <List>
                <ListItem button="button" component={Link} to="/main">
                    <ListItemText primary="홈페이지"/>
                </ListItem>
                <ListItem button="button" component={Link} to="/main/Music_player">
                    <ListItemText primary="뮤직 음악 듣기"/>
                </ListItem>
                <ListItem button="button" component={Link} to="/main/Music_player_main">
                    <ListItemText primary="뮤직 음악 목록"/>
                </ListItem>
                <ListItem button="button" component={Link} to="">
                    <ListItemText primary="24시간 자유 음악"/>
                </ListItem>
            </List>
        </div>
    </Drawer>
</>
    );
};

export default SiderList;