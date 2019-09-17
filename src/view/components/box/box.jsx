import React from 'react';
import { BaseStyle } from './styles';

export const Box = props => {
    const children = props.children;

    return (
        <BaseStyle>
            {children}
        </BaseStyle>
    )
}