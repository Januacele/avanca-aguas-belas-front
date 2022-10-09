import React from 'react';
import Button from '@mui/material/Button';


export const CommonButton = ({children, color, disabled, size, variant, sx, onClick }) => {
    return(
     <Button
        color={color}
        disable={disabled}
        size={size}
        variant={variant}
        sx={sx}
        onClick={onClick}
     >
        {children}
     </Button>
    );
}

export default CommonButton;