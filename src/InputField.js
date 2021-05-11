import React from 'react';
import TextField from '@material-ui/core/TextField';


const InputField = ({ id, defaultValue, onChange }) =>
    <TextField 
        required 
        id={id} 
        defaultValue={defaultValue}
        onChange={onChange}
        />;

export default InputField;