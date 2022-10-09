import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const CommonBasicMenu = ({ anchorEl, handleClose, open, menuItems }) => {
    return (
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item) => (
          <MenuItem
            onClick={handleClose}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
 
    )
}

export default CommonBasicMenu