import React, { useState, useEffect } from 'react';
import { createAction, handleActions } from 'redux-actions'
import { get } from '../util/api'

export const AUTH_GLOBAL = `AUTH_GLOBAL`
export const setAuthGlobal = createAction(AUTH_GLOBAL)

export const getAuthGlobal = (data) => async dispatch => {

    const firstLogin = localStorage.getItem("firstLogin");
    console.log(firstLogin)
    if (firstLogin) {
        const res = await get('http://localhost:5000/accessToken', data)
        dispatch(setAuthGlobal(res.data))
    }


}
const initialState = {
    auth: ''
}
export default handleActions(
    {
        [AUTH_GLOBAL]: (state, { payload }) => ({
            ...state,
            auth: payload
        })
    },
    initialState
)