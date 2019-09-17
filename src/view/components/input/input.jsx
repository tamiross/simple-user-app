import React from 'react';
import { base } from './styles';

export const Input = props => {
    const baseStyle = {...base, ...props.style}
    const { type, placeholder, value  } = props;
    
    const inputProps = {
        style: baseStyle,
        type: type,
        value: value,
        placeholder: placeholder
    }

    return (
            <input {...inputProps} />
    )
}