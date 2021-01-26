import { createAction, handleActions } from 'redux-actions'
import { noteData } from '../../firebaseConnection'

export const DATANOTE = `DATANOTE`
export const DataNote = createAction(DATANOTE)

export const getDataNote = () => async dispatch => {
    try {
        noteData.on('value', (data) => {
            const arrayNote = []
            data.forEach(v => {
                const key = v.key
                const title = v.val().name
                const noidung = v.val().content
                arrayNote.push({
                    key: key,
                    name: title,
                    content: noidung
                })
            })
            dispatch(DataNote(arrayNote))
        })
    } catch (e) {
        console.log('error')
    }
}

export const removeDataNote = (id) => async dispatch => {
    try {
        noteData.child(id).remove()
        dispatch(getDataNote())
    } catch (e) {
        console.log('error')
    }
}

export const addDataNote = (data) => async dispatch => {
    try {
        noteData.push(data)
        dispatch(getDataNote())
    } catch (e) {
        console.log('error')
    }
}

export const editDataNote = (dataedit) => async dispatch => {
    try {
        noteData.child(dataedit.key).update({
            name: dataedit.name,
            content: dataedit.content
        })
        dispatch(getDataNote())
    } catch (e) {
        console.log('error')
    }
}

const initialState = {
    dataNote: []
}

export default handleActions(
    {
        [DATANOTE]: (state, { payload }) => ({
            ...state,
            dataNote: payload
        })
    },
    initialState
)