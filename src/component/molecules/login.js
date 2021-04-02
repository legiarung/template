import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Cookie from 'js-cookie'
import { useDispatch } from 'react-redux'


const Login = () => {
    const history = useHistory()
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        try {
            const res = await axios.post("http://localhost:5000/login", data)
            Cookie.set('refreshtoken', res.data.refresh_token, {
                path: 'http://localhost:5000/accessToken',
                expires: 7
            })
            localStorage.setItem('firstLogin', true)
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="col-md-4">
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" type="email" name="email" ref={register({ required: true })} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" ref={register({ required: true })} />
                </div>
                <p className="my-2">
                    You don't have an account? <button type="button"><a href="/register" style={{ color: 'crimson' }}>Register Now</a></button>
                </p>
                <button className="btn btn-primary" type="submit" >Login</button>
            </form>
        </div>
    );
};


export default Login;
