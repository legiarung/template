import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { editDataNote } from '../../../redux/modules/FirebaseConectRedux'
import { useDispatch } from 'react-redux';


const NoteForm = ({ note, onPushData }) => {
    const dispatch = useDispatch()
    const [isAdd, setisAdd] = useState(true);
    const { register, handleSubmit, reset, errors } = useForm();
    useEffect(() => {
        if (note) setisAdd(false)
    }, [note]);

    const onSubmit = (data) => {
        if (isAdd) {
            onPushData(data)
            // const delay = t => new Promise(resolve => setTimeout(resolve, t))
            // delay(1000).then(() => {
            //     console.log('hehe')
            //     delay(2000).then(() => console.log('hihi'))
            // })

        } else {
            dispatch(editDataNote(data))
            setisAdd(true)
        }
        reset()
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <input type="hidden" name="key" defaultValue={isAdd ? '' : note.key} ref={register()} />
                <label>Title Note</label>
                <input className="form-control" defaultValue={isAdd ? '' : note.name} name="name" ref={register({ required: true })} />
                {errors.name && <div>This field is required</div>}
            </div>
            <div className="form-group">
                <label>Content Note</label>
                <input type="text" className="form-control" defaultValue={isAdd ? '' : note.content} name="content" ref={register({ required: true })} />

                {errors.content && <div>This field is required</div>}
            </div>
            <button className="btn btn-primary" type="submit" >{isAdd ? 'Add Note' : 'Edit Note'}</button>
            {
                !isAdd && (
                    <button className="btn btn-secondary mrleft-20 " type="button" onClick={() => setisAdd(true)} >Can Edit</button>
                )

            }
        </form>

    );
};


NoteForm.propTypes = {

};


export default NoteForm;
