import React, { useState, useEffect } from 'react';
import NavBarOption from '../../components/navBarOption';
import Grid from '@mui/material/Grid';
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom'; 
import Box from '@mui/material/Box';
import { homeScreenStyles } from './styles';
import { StandardImageList } from './standardImageList';


function HomeScreen() {
  const [title, setTitle] = useState(null);
  const location = useLocation();
  
  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, ' ');
    setTitle(parsedTitle);
  }, [location]);

  return (
    <Grid container>
      <NavBarOption />
      <Header title={title} />

      <Box sx={homeScreenStyles.wrapper}>
        <StandardImageList />
      </Box>
    </Grid>
    
  );
}

export default HomeScreen;