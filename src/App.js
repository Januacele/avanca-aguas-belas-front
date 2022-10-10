import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import UserContext from "../src/contexts/UserContext";
import LoginScreen from "./pages/authPage/LoginScreen";
import RegisterScreen from "./pages/authPage/RegisterScreen";
import HomeScreen from "./pages/homeScreen/homeScreen";
import InsertDistricts from "./pages/insertDistricts/InsertDistricts";
import GeneralResults from './pages/generalResults/generalResults';
import GraficResultsDistricts from './pages/graficResultsDistricts/graficResultsDistricts';
import GraficResultsStreats from './pages/graficResultsStreats/graficResultsStreats';
import InsertStreats from './pages/insertStreats/insertStreats';
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme';


function App(){
    const [data, setData] = useState("");
    const [token, setToken] = useState("");
    

    return (
        <UserContext.Provider value={{  token, setToken, data, setData }}>
            <ThemeProvider theme={dashboardTheme}>
                <BrowserRouter> 
                    <Routes>
                        <Route path="/" element={<LoginScreen />}> </Route>
                        <Route path="/register" element={<RegisterScreen />}> </Route>
                        <Route path="/home" element={<HomeScreen />}>  </Route>
                        <Route path="/home/insertDistricts" element={<InsertDistricts />}> </Route>
                        <Route path="/home/GeneralResults" element={<GeneralResults />}> </Route>
                        <Route path="/home/graficResultsDistricts" element={<GraficResultsDistricts />}> </Route>
                        <Route path="/home/GraficResultsStreats" element={<GraficResultsStreats />}> </Route>
                        <Route path="/home/InsertStreats" element={<InsertStreats />}> </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </UserContext.Provider>
    );
}


export default App;