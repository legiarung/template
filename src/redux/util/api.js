import axios from 'axios'
// import { reloadUserAuth, userToken } from '../../../components/utils/googleAuth'
const USER_KEY = 'user'

const instance = axios.create({
    // baseURL: __API_URL__
})

instance.interceptors.request.use(
    config => {
        // config.headers = {
        //   Authorization: `Bearer ${userToken()}`,
        //   'x-auth-token-type': 'internal-manager'
        // }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export const get = async (url, params) => {
    //   await reloadUserAuth()
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
    // 並列のAPIコールに失敗するため、一時コメントアウト
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
    //   await reloadUserAuth()
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
    //   await reloadUserAuth()
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
