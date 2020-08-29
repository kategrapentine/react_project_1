import React from 'react';
import Login from './login-form';
import NavBar from './navbar'

export default class WebPage extends React.Component {
    render() {
        return(
            <div>
                <NavBar />
                <br></br>
                <Login />
            </div>
        );
    }
}