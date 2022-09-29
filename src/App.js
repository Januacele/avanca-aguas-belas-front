import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import HomeScreen from "./pages/HomeScreen";


function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />}> </Route>
                <Route path="/register" element={<RegisterScreen />}> </Route>
                <Route path="/home" element={<HomeScreen />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}


export default App;