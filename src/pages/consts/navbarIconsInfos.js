import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';


export const navbarIconsInfo = [
    {
        id: 0,
        icon: <LeaderboardIcon />,
        label: 'Resultados Gráficos Ruas', 
        route: 'graficResultsStreats'
    },
    {
        id: 1,
        icon: <LeaderboardIcon />,
        label: 'graficResultsDistricts', 
        route: 'route'
    },
    {
        id: 2,
        icon: <AutoAwesomeMotionIcon />,
        label: 'generalResults', 
        route: 'route'
    },
    {
        id: 3,
        icon: <RotateLeftIcon />,
        label: 'Sair', 
        route: '/'
    }
]