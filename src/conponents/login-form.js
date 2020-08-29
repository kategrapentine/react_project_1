import React from 'react';


export default class Login extends React.Component {
    render() {
        return (
            <div className="container" id="login">
                <div className="card bg-dark border-info">
                    <div className="card-body text-info">
                        <h3 className="card-title">Log In:</h3>
                        <div className="form-group">
                            <input type="text" placeholder="Username" className="form-control"></input>
                            <input type="password" placeholder="Password" className="form-control"></input>
                        </div>
                        <button className="btn btn-info">Login</button>
                    </div>
                </div>
            </div>
        );
    }
} 

