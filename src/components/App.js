import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";


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