import { createAction, handleActions } from 'redux-actions'

export const LOANG_DING = `LOANG_DING`
export const setLoading = createAction(LOANG_DING)

export const getLoading = (isLoad) => async dispatch => {
    dispatch(setLoading(isLoad))
}
const initialState = {
    loading: false
}
export default handleActions(
    {
        [LOANG_DING]: (state, { payload }) => ({
            ...state,
            loading: payload
        })
    },
    initialState
)