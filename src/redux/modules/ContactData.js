import { createAction, handleActions } from 'redux-actions'

const COUPON = 'COUPON'
export const SET_CAMPAIGNS = `${COUPON}/SET_CAMPAIGNS`
export const setCampaigns = createAction(SET_CAMPAIGNS)

export const fetchVideo = (page) => {
    console.log(page)

}
export const fetchImg = (img) => {
    console.log(img)

}
const initialState = {
    campaigns: []
}
export default handleActions(
    {
        [SET_CAMPAIGNS]: (state, { payload }) => ({
            ...state,
            campaigns: payload.campaigns
        })
    },
    initialState
)