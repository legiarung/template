import axios from 'axios'
import firebase from 'firebase'
// import { reloadUserAuth, userToken } from './gooogleAuth'
const USER_KEY = 'user'

const instance = axios.create({
    // baseURL: __API_URL__
})

instance.interceptors.request.use(async (config) => {
    const currentUser = firebase.auth().onAuthStateChanged(async (user) => {
        if (!user) {
            console.log('user not login')
            return
        }
        const token = await user.getIdToken()
        config.headers.Authorization = `Bearer ${token}`
        console.log(token)
    }
    );
    console.log(currentUser)
    // console.log(currentUser)
    // if (currentUser) {
    //     const userToken = await currentUser.getIdToken();
    //     console.log('hehe', userToken)
    //     config.headers.Authorization = `Bearer ${userToken}`
    // }
    return config
},
    error => {
        return Promise.reject(error)
    }
)

export const get = async (url, params) => {
    // await reloadUserAuth()
    try {
        const res = await instance.get(url, { params })
        return res
    } catch (e) {
        if (e.response.status === 401) {
            window.localStorage.removeItem(USER_KEY)
            window.location.href = '/login'
        }
        return Promise.reject(e)
    }
}

export const post = async (url, data) => {
    // await reloadUserAuth()
    try {
        const res = await instance.post(url, data)
        return res
    } catch (e) {
        if (e.response.status === 401) {
            window.localStorage.removeItem(USER_KEY)
            window.location.href = '/login'
        }
        return Promise.reject(e)
    }
}

export const put = async (url, data) => {
    // await reloadUserAuth()
    try {
        const res = await instance.put(url, data)
        return res
    } catch (e) {
        if (e.response.status === 401) {
            window.localStorage.removeItem(USER_KEY)
            window.location.href = '/login'
        }
        return Promise.reject(e)
    }
}

export const remove = async (url, params) => {
    // await reloadUserAuth()
    try {
        const res = await instance.delete(url, { params })
        return res
    } catch (e) {
        if (e.response.status === 401) {
            window.localStorage.removeItem(USER_KEY)
            window.location.href = '/login'
        }
        return Promise.reject(e)
    }
}

export const upload = async (url, formData) => {
    // await reloadUserAuth()
    try {
        const res = await instance.post(url, formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        return res
    } catch (e) {
        if (e.response.status === 401) {
            window.localStorage.removeItem(USER_KEY)
            window.location.href = '/login'
        }
        return Promise.reject(e)
    }
}
