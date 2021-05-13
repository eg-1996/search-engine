import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
        textField:{
            color: 'black'
        }
  });

const InputField = ({ id, defaultValue, onChange, error, label, onKeyDown }) => {
    const classes = useStyles();
    return(
        <TextField
        required 
        id={id} 
        defaultValue={defaultValue}
        onChange={onChange}
        error={error}
        label={label}
        onKeyDown={onKeyDown}
        InputProps={{
            className: classes.textField
          }}
        InputLabelProps={{
            className: classes.textField
        }}
        SelectProps={{
            className: classes.textField
        }}

        />
    );
}

export default InputField;