import HomeIcon from '@mui/icons-material/Home';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import AddHomeIcon from '@mui/icons-material/AddHome';


export const navbarIconsAdd = [
    
    {
        id: 0,
        icon: <HomeIcon />,
        label: 'Página Inicial', 
        route: '/home'
    },
    {
        id: 1,
        icon: <AddHomeWorkIcon />,
        label: 'Cadastrar Bairros', 
        route: '/home/insertDistricts'
    },
    {
        id: 2,
        icon: <AddHomeIcon />,
        label: 'Cadastrar Ruas', 
        route: '/home/InsertStreats'
    }
]