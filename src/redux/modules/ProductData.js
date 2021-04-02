import { createAction, handleActions } from 'redux-actions'
import { get, post, remove, put } from '../util/api'

export const SET_CAMPAIGNS = `SET_CAMPAIGNS`
export const setCampaigns = createAction(SET_CAMPAIGNS)

export const fetchProducts = () => async dispatch => {
    try {
        const res = await get('http://localhost:5000/food')
        console.log(res)
        dispatch(setCampaigns(res.data))
        console.log(res.data)
    } catch (e) {
        console.log('error')
    }
}

export const AddCampaign = (data) => async dispatch => {
    console.log(data)
    try {
        await post('https://5e83062078337f00160ae8ec.mockapi.io/api/products', data)
        dispatch(fetchProducts())
    } catch (e) {
        console.log('error')
    }
}

export const DeleteCampaign = (id) => async dispatch => {
    try {
        await remove(`https://5e83062078337f00160ae8ec.mockapi.io/api/products/${id}`)
        dispatch(fetchProducts())
    } catch (e) {
        console.log('error')
    }
}

export const EditCampaign = (product) => async dispatch => {
    console.log(product)
    try {
        await put(`https://5e83062078337f00160ae8ec.mockapi.io/api/products/${product.id}`, { ...product })
        dispatch(fetchProducts())
    } catch (e) {
        console.log('error', e)
    }
}
const initialState = {
    campaigns: []
}

export default handleActions(
    {
        [SET_CAMPAIGNS]: (state, { payload }) => ({
            ...state,
            campaigns: payload
        })
    },
    initialState
)