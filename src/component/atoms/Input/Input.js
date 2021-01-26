import React from 'react';

const Input = ({ type, name, placeholder, form }) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                ref={form.register({ required: true })}
            />
        </div>
    );
};

export default Input;
