import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AddCampaign } from '../../../redux/modules/ProductData';
import { EditCampaign } from '../../../redux/modules/ProductData';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';

const AddProduct = () => {
    const { id } = useParams()
    const idAddMode = !id
    const edit = useSelector(state => state.ProductData.campaigns.find(x => x.id === id))
    const values = idAddMode ? {
        id: "",
        name: "",
        price: "",
        status: "true"
    } : edit
    const history = useHistory()
    const dispatch = useDispatch()
    const { register, handleSubmit, reset, errors } = useForm({
        defaultValues: values
    });
    const [success, setsuccess] = useState(false);

    const onSubmit = (data) => {
        if (data.status === 'true') {
            data.status = true
        } else {
            data.status = false
        }
        console.log(data)
        if (idAddMode) {
            dispatch(AddCampaign(data))
            // const abc = setTimeout(() => setsuccess(true), 1000)
            // clearTimeout(abc, 3000)
        } else {
            dispatch(EditCampaign(data))
        }
        reset();
        const delay = t => new Promise(resolve => setTimeout(resolve, t))
        delay(1000)
            .then(() => setsuccess(true))
            .then(() => history.push('/products'))

    };

    return (
        <div className="col-md-3">
            {success && (<div className="bg-success text-white succsess">succses</div>)}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="hidden" name="id" ref={register} />
                <div className="form-group">
                    <label>Title product</label>
                    <input className="form-control" name="name" ref={register({ required: true })} />
                    {errors.name && <div>This field is required</div>}
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" name="price" ref={register({ required: true })} />

                    {errors.price && <div>This field is required</div>}
                </div>
                <div className="form-group">
                    <label>Status</label>
                    <select className="custom-select" name="status" ref={register}>
                        <option value={true}>On</option>
                        <option value={false}>Off</option>
                    </select>
                </div>
                <Link className="btn btn-secondary" to="/products">Back Product</Link>
                <button className="btn btn-primary" type="submit" >{idAddMode ? 'Add to Products' : 'Edit'}</button>
            </form>

        </div>
    );
};


export default AddProduct;
