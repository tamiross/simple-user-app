import React from 'react';

export const Icon = props => {
    if (!props.iconSrc)
        return null;
        
    return <img src={props.iconSrc} />
}