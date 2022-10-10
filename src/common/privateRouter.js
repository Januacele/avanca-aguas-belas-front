import React from 'react';
import {Route, Redirect} from 'react-router';


const privateRoute = () => {
    const isLogged = localStorage.getItem('token');
    return isLogged ? <Route/> : <Redirect to = "/" />
}

export default privateRoute;