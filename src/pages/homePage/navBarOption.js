import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarIconsAdd } from '../consts/navbarIconsAdd';
import { navbarIconsInfo } from '../consts/navbarIconsInfos';
import { useNavigate } from "react-router-dom";

const drawerWidth = 260;

function NavBarOption() {
    const navigate = useNavigate();

    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#101F33',
            color: '#FFFFFF'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {navbarIconsAdd.map((item, index) => (
            <ListItem 
                button
                key={item.id}
                onClick = {() => navigate(item.route)}
            >
              <ListItemButton>
                <ListItemIcon sx ={{color:'#FFFFFF'}}>
                  {item.icon}
                  </ListItemIcon >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {navbarIconsInfo.map((item, index) => (
            <ListItem 
                button
                key={item.id}
                onClick = {() => navigate(item.route)}
            >
              <ListItemButton>
                <ListItemIcon sx ={{color:'#FFFFFF'}}>
                  {item.icon}
                </ListItemIcon >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
)}

export default NavBarOption;