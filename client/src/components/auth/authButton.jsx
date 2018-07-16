import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const AuthButton = (props) => {
    if (isLoggedIn()) {
        console.log('this is authbutton logout error. why is it doing this')
        return <Link className="btn btn-info float-right position-relative" to="/logout">Logout</Link>;
    } else {
        console.log('login')
        return <Link className="btn btn-info float-right position-relative" to="/login">Login</Link>;
    }
};

export default AuthButton;