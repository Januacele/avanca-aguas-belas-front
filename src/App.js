import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import UserContext from "../src/contexts/UserContext";
import LoginScreen from "./pages/authPage/LoginScreen";
import RegisterScreen from "./pages/authPage/RegisterScreen";
import HomeScreen from "./pages/homePage/homeScreen/homeScreen";
import InsertDistricts from "./pages/homePage/insertDistricts/InsertDistricts";
import GeneralResults from './pages/homePage/generalResults/generalResults';
import GraficResultsDistricts from './pages/homePage/graficResultsDistricts/graficResultsDistricts';
import GraficResultsStreats from './pages/homePage/graficResultsStreats/graficResultsStreats';


function App(){
    const [data, setData] = useState("");
    const [token, setToken] = useState("");

    return (
        <UserContext.Provider value={{  token, setToken, data, setData }}>     
            <BrowserRouter> 
                <Routes>
                    <Route path="/" element={<LoginScreen />}> </Route>
                    <Route path="/register" element={<RegisterScreen />}> </Route>
                    <Route path="/home" element={<HomeScreen />}> </Route>
                    <Route path="/home/insertDistricts" element={<InsertDistricts />}> </Route>
                    <Route path="/home/GeneralResults" element={<GeneralResults />}> </Route>
                    <Route path="/home/graficResultsDistricts" element={<GraficResultsDistricts />}> </Route>
                    <Route path="/home/GraficResultsStreats" element={<GraficResultsStreats />}> </Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}


export default App;