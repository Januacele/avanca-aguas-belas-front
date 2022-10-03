import NavBarOption from "../navBarOption";
import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';

function HomeScreen() {

    return (
        <Grid container>
            <NavBarOption />
            <Outlet />
        </Grid>
       
    )

}


export default HomeScreen