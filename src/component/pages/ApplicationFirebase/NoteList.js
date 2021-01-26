import React, { useEffect } from 'react';
import { getDataNote } from '../../../redux/modules/FirebaseConectRedux'
import { useDispatch } from 'react-redux';

const NoteList = ({ dataNote, removeNote, editNote }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataNote())
    }, []);

    const handleRemove = (id) => {
        removeNote(id)
    }

    const handleEdit = (dataedit) => {
        editNote(dataedit)
    }
    return (
        <div>
            {
                dataNote.map(v => {
                    return (
                        <div className="card mr-25" key={v.key}>
                            <div className="card-header">
                                <h5 className="card-title">{v.name}</h5>
                            </div>
                            <div className="card-body">
                                <p className="card-text">{v.content}</p>
                                <a href="#" className="btn btn-primary" onClick={() => handleEdit({
                                    key: v.key,
                                    name: v.name,
                                    content: v.content
                                })}>
                                    Edit
                                </a>
                                <a href="#" className="btn btn-danger mrleft-20" onClick={() => handleRemove(v.key)}>Delete</a>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
};


export default NoteList;
