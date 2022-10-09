import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { navbarIconsAdd } from '../pages/consts/navbarIconsAdd';
import { navbarIconsInfo } from '../pages/consts/navbarIconsInfos';
import { useNavigate } from "react-router-dom";
import { navBarStyles } from "../pages/consts/styles";


export const NavBarOption = () => {
    const navigate = useNavigate();

    return (
        <Drawer
        sx={navBarStyles.drawer}
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
                <ListItemIcon sx = { navBarStyles.icons }>
                  {item.icon}
                  </ListItemIcon >
                <ListItemText 
                  sx = { navBarStyles.text }
                  primary = {item.label} />
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
                <ListItemIcon sx ={ navBarStyles.icons }>
                  {item.icon}
                </ListItemIcon >
                <ListItemText 
                  sx = { navBarStyles.text }
                  primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
)}

export default NavBarOption;