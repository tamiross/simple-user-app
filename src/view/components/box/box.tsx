import React from 'react';
import { BaseStyle } from './styles';

interface IBoxProps {
    style?: {}
}

export const Box: React.FC<IBoxProps> = props => {
    const children = props.children;

    return (
        <BaseStyle style={props.style}>
            {children}
        </BaseStyle>
    )
}