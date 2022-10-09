import React from 'react'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { headerStyles } from './styles';

export const Header = ({ title }) => {
    return (
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Avatar src="https://zconti.com.br/wp-content/uploads/2021/08/abrir-empresa-em-Aguas-Belas-PE.jpg" />
            </Box>
            <Box sx={headerStyles.middleRow}>
                <Typography
                    variant="h1"
                    color="white"
                >
                    {title}
                </Typography>
                <Box>
                    <Typography
                        variant="h8"
                        color="white"
                    >
                        Secretaria de Obras
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Header;
