// import React, { useEffect, useState, createContext } from 'react'
// import moment from 'moment'

// const USER_KEY = 'user'

// export const AuthUserContext = createContext({
//     isSignedIn: false,
//     userLocal: null,
//     error: ''
// })

// export const AuthUserProvider = ({ children }) => {
//     const { isSignedIn, userLocal, error } = useSignedIn()
//     return (
//         <AuthUserContext.Provider value={{ isSignedIn, userLocal, error }}>
//             {children}
//         </AuthUserContext.Provider>
//     )
// }

// export const useSignedIn = () => {
//     const userInStorage = JSON.parse(window.localStorage.getItem(USER_KEY))
//     const [isSignedIn, setIsSignedIn] = useState(!!userInStorage)
//     const [userLocal, setUserLocal] = useState(userInStorage)
//     const [error, setError] = useState('')
//     useEffect(() => {
//         window.localStorage.setItem(USER_KEY, JSON.stringify(userLocal))
//     }, [userLocal])
//     useEffect(() => {
//         window.gapi.load('client:auth2', () => {
//             window.gapi.client
//                 .init({
//                     clientId: __CLIENT_ID__,
//                     scope: 'openid'
//                 })
//                 .then(() => {
//                     const googleAuth = gapi.auth2.getAuthInstance()
//                     if (googleAuth.isSignedIn.get()) {
//                         const googleUser = googleAuth.currentUser.get()
//                         setIsSignedIn(checkIsAsoviewAccount(googleUser))
//                         setUserLocal(getUserProfile(googleUser))
//                     }
//                     googleAuth.isSignedIn.listen(async isSignedIn => {
//                         if (!isSignedIn) {
//                             setIsSignedIn(false)
//                             setUserLocal(null)
//                             return
//                         }
//                         const googleUser = googleAuth.currentUser.get()

//                         if (!checkIsAsoviewAccount(googleUser)) {
//                             await googleAuth.signOut()
//                             setError('@asoview.co.jpのアカウントでログインしてください')
//                             setIsSignedIn(false)
//                             setUserLocal(null)
//                             return
//                         }
//                         setError('')
//                         setIsSignedIn(true)
//                         setUserLocal(getUserProfile(googleUser))
//                     })
//                 })
//         })
//     }, [])

//     return {
//         isSignedIn,
//         userLocal,
//         error
//     }
// }

// export const login = async () => {
//     const googleAuth = gapi.auth2.getAuthInstance()
//     try {
//         await googleAuth.signIn()
//     } catch (err) {
//         if (err.error !== 'popup_closed_by_user') {
//             throw err
//         }
//     }
// }

// export const reloadUserAuth = async () => {
//     const unixCurrentTime = moment().valueOf()
//     const storedUser = JSON.parse(window.localStorage.getItem(USER_KEY))
//     const googleAuth = gapi.auth2.getAuthInstance()

//     if (storedUser && moment(unixCurrentTime).isAfter(+storedUser.expiredTime)) {
//         await googleAuth.signOut()
//         return
//     }

//     if (googleAuth && googleAuth.isSignedIn.get()) {
//         const userAuthInfo = await googleAuth.currentUser.get().reloadAuthResponse()
//         window.localStorage.setItem(
//             USER_KEY,
//             JSON.stringify({
//                 ...getUserProfile(googleAuth.currentUser.get()),
//                 token: userAuthInfo.id_token,
//                 expiredTime: +userAuthInfo.expires_at
//             })
//         )
//     }
// }

// export const logout = async () => {
//     const googleAuth = gapi.auth2.getAuthInstance()
//     await googleAuth.signOut()
// }

// export const userToken = () =>
//     JSON.parse(window.localStorage.getItem(USER_KEY)).token

// const getUserProfile = user => ({
//     name: user.getBasicProfile().getName(),
//     image: user.getBasicProfile().getImageUrl(),
//     token: user.getAuthResponse().id_token,
//     expiredTime: user.getAuthResponse().expires_at
// })

// const checkIsAsoviewAccount = googleUser => {
//     const email = googleUser.getBasicProfile().getEmail()
//     return /.*(@asoview.co.jp|@asoview.vn)/.test(email)
// }
