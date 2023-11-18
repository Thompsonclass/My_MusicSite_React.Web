import React, {useState} from 'react';
import {Drawer, List, ListItem, ListItemText, IconButton} from '@material-ui/core';
import {styles} from '../Styled/ReadSiderList.styled';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';

const SiderList = () => {
    const [Open, setOpen] = useState(false); // 리스트가 열려있는지 여부를 관리하는 상태

    // styled-components로 정의된 스타일 클래스 가져오기
    const classes = styles();

    // 리스트 열기/닫기 함수
    const toggleDrawer = () => {
        console.log("슬라이드 리스트 클릭");
        setOpen(!Open); // 리스트의 상태를 반전시켜 열기/닫기 토글
    };

    return (
        <> {/* 아이콘을 클릭하면 리스트 열기/닫기 함수 호출 */
        } < IconButton edge = "start" color = "inherit" onClick = {
            toggleDrawer
        } > <MenuIcon/>
    </IconButton>

            {/* Drawer 컴포넌트를 사용하여 사이드 리스트 표시 */
        } < Drawer anchor = "left" open = {
            Open
        }
        onClose = {
            toggleDrawer
        }
        className = {
            classes.drawer
        } > {/* 리스트 아이템 목록 */
        } < div className = {
            classes.drawer
        }
        onClick = {
            toggleDrawer
        }
        onKeyDown = {
            toggleDrawer
        } > <List>
            <ListItem button="button" component={Link} to="/main">
                <ListItemText primary="홈페이지"/>
            </ListItem>
            <ListItem button="button" component={Link} to="/main/Music_player">
                <ListItemText primary="뮤직 음악 듣기"/>
            </ListItem>
            <ListItem button="button" component={Link} to="/main/Music_player_main">
                <ListItemText primary="뮤직 음악 목록"/>
            </ListItem>
            <ListItem button="button" component={Link} to="/main/Music_player_eq">
                <ListItemText primary="24시간 자유 음악"/>
            </ListItem>
        </List>
    </div>
</Drawer>
</>
    );
};

export default SiderList;
