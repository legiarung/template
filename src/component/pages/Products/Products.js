import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, } from '../../../redux/modules/ProductData'
import { DeleteCampaign, } from '../../../redux/modules/ProductData'
import styles from './styles.scss'
import ListProduct from '../../organisms/Product/ListProduct'
import { Link, useHistory } from 'react-router-dom'

const Products = () => {
    const history = useHistory()
    const { campaigns } = useSelector(state => state.ProductData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const handleRemoveClick = (product) => {
        console.log(product)
        dispatch(DeleteCampaign(product))
    }
    const handleEditClick = (product) => {
        history.push(`/addproduct/${product.id}`)
    }
    return (
        <div className='product'>
            <Link to="/addproduct">ADD PRODUCT</Link>
            <ListProduct
                campaigns={campaigns}
                handleRemoveClick={handleRemoveClick}
                handleEditClick={handleEditClick}
            />
        </div>
    );
};

export default Products;