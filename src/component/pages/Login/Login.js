import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/Products',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ]
};
const Login = () => {
    return (
        <div className="col-md-3">
            <form >
                <div className="form-group">
                    <input type="hidden" name="key" />
                    <label>UserName</label>
                    <input className="form-control" />
                </div>
                <div className="form-group">
                    <label>PassWorld</label>
                    <input className="form-control" />
                </div>
                <button className="btn btn-primary" type="submit" >Login</button>
            </form>
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    );
};


export default Login;
