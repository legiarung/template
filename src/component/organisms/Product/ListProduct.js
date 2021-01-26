import React, { useState, useEffect } from 'react';
import './styles.scss'
import { useForm } from 'react-hook-form';

const ListProduct = ({ campaigns, handleRemoveClick, handleEditClick }) => {
    const { register, handleSubmit } = useForm();

    const handleDelete = (id) => {
        handleRemoveClick(id)
    }

    const handleEdit = (id) => {
        handleEditClick(id)
    }

    const [isSearch, setisSearch] = useState('');

    const onSubmit = (data) => {
        setisSearch(data.search)
    };

    const elm = campaigns.map((v, i) => {
        const search = (v.name === isSearch) || (isSearch === '') ? true : false
        const display = v.status === 'true' ? true : false
        return display && search && (
            <div key={i} className="col-md-3 col-sm-6 product">
                <button
                    className="btn btn-danger btn-sm delete"
                    onClick={() => handleDelete(v.id)}
                >
                    Delete
                </button>
                <button
                    className="btn btn-warning btn-sm edit"
                    onClick={() => handleEdit({
                        id: v.id,
                        name: v.name,
                        price: v.price,
                        status: v.status
                    })}
                >Edit</button>
                <div className="product-grid">
                    <div className="product-image">
                        <a href="#">
                            <img className="pic-1" src={v.img} />
                        </a>
                        <span className="product-discount-label">-20%</span>
                    </div>
                    <div className="product-content">
                        <h3 className="title">
                            <a href="#">{v.name}</a>
                        </h3>
                        <div className="price">{v.price}
                            <span>$20.00</span>
                        </div>
                    </div>
                    <ul className="social">
                        <li><a data-tip="Quick View"><i className="fa fa-eye" /></a></li>
                        <li><a data-tip="Wishlist"><i className="fa fa-heart" /></a></li>
                        <li><a data-tip="add to cart"><i className="fa fa-shopping-cart" /></a></li>
                        <li><a data-tip="Compare"><i className="fa fa-random" /></a></li>
                    </ul>
                </div>
            </div>
        )
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Search</label>
                            <input placeholder="Seach name" className="form-control" name="search" ref={register} />
                        </div>
                        <button className="btn btn-primary" type="submit" >Search</button>
                    </form>
                </div>
                {elm}
            </div>
        </div>
    );
};


export default ListProduct;
