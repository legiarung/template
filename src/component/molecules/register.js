import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Register = () => {
    const { register, handleSubmit, reset } = useForm()
    const history = useHistory()

    const onSubmit = async (data) => {
        try {
            await axios.post("http://localhost:5000/users/register", data)
            history.push("/login")
        } catch (error) {
            console.log(error)
        }
        reset()
    }
    return (
        <div className="col-md-4">
            <form method="pots" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>UserName</label>
                    <input className="form-control" name="name" ref={register({ required: true })} />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" ref={register({ required: true })} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" ref={register({ required: true })} />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" name="cfpassword" ref={register({ required: true })} />
                </div>
                <button className="btn btn-primary" type="submit" >Register</button>
            </form>
        </div>
    );
};


export default Register;
