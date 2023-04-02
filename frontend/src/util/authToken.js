import {redirect} from "react-router-dom";

export const getAuthToken = () => {
    const token = localStorage.getItem('token');    
    const tokenDuration = getTokenDuration();

    if(!token) {
        return null;
    }

    if(tokenDuration < 0) {
        return 'EXPIRED';
    }

    return token;
}

export const loadToken = () => {
    return getAuthToken();
}

export const checkAuthLoader= () => {
    const token = getAuthToken();

    if(!token) {
        return redirect('/auth');
    }

    return null;
}

export const getTokenDuration = () => {
    const expirationDate = new Date(localStorage.getItem('expiration'));
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();

    return duration;
}