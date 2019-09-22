import React from 'react';
import { base } from './styles';

export const Input = props => {
    const baseStyle = {...base, ...props.style}
    const { type, placeholder, value, onChange  } = props;
    
    const inputProps = {
        style: baseStyle,
        type: type,
        value: value,
        placeholder: placeholder,
        onChange: onChange
    }

    return (
            <input {...inputProps} />
    )
}