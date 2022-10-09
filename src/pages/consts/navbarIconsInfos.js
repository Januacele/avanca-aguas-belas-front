import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';


export const navbarIconsInfo = [
    {
        id: 0,
        icon: <LeaderboardIcon />,
        label: 'Resultados Gráficos Ruas', 
        route: '/home/GraficResultsStreats'
    },
    {
        id: 1,
        icon: <LeaderboardIcon />,
        label: 'Resultados Gráficos Bairros', 
        route: '/home/graficResultsDistricts'
    },
    {
        id: 2,
        icon: <AutoAwesomeMotionIcon />,
        label: 'Resultados Gerais', 
        route: '/home/GeneralResults'
    },
    {
        id: 3,
        icon: <RotateLeftIcon />,
        label: 'Sair', 
        route: '/'
    }
]