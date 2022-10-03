import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import UserContext from "../src/contexts/UserContext";
import LoginScreen from "./pages/authPage/LoginScreen";
import RegisterScreen from "./pages/authPage/RegisterScreen";
import HomeScreen from "./pages/homePage/homeScreen/homeScreen";
import InsertDistricts from "./pages/homePage/insertDistricts/InsertDistricts";


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
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}


export default App;