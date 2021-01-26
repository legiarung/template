import React, { useState } from 'react';
import './styles.scss'
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import { addDataNote, removeDataNote } from '../../../redux/modules/FirebaseConectRedux'
import { useDispatch, useSelector } from 'react-redux';

const ApplicationFirebase = () => {
    const { dataNote } = useSelector(state => state.FirebaseConectRedux)
    const [note, setNote] = useState('');

    const dispatch = useDispatch()

    const onPushData = (data) => {
        dispatch(addDataNote(data))
    }

    const removeNote = (id) => {
        console.log(id)
        dispatch(removeDataNote(id))
    }

    const editNote = (dataedit) => {
        setNote(dataedit)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 panelnote">
                    <div className="col-md-8">
                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <NoteList dataNote={dataNote} removeNote={removeNote} editNote={editNote} />
                        </div>
                    </div>
                    <div className="col-md-4"><NoteForm note={note} onPushData={onPushData} /></div>

                </div>
            </div>

        </div>


    );
};

export default ApplicationFirebase;
