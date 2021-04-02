import React from 'react';
import { useForm } from 'react-hook-form';
import { post } from '../../redux/util/api';


const Food = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        try {
            post("http://localhost:5000/food/add", data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="col-md-4">
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" type="text" name="name" ref={register({ required: true })} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" name="price" ref={register({ required: true })} />
                </div>

                <button className="btn btn-primary" type="submit" >Login</button>
            </form>
        </div>
    );
};


export default Food;
