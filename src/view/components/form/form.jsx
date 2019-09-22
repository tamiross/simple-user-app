import React from 'react';
import { BaseStyle } from './styles';
import { Box } from '@components/box/box';

export const Form = props => {
    // const baseStyle = {...base, ...props.style}
    const children = props.children;

    return (
        <Box>
            <BaseStyle>
                <form onSubmit={props.onSubmit}>
                    {children}
                </form>
            </BaseStyle>
        </Box>
    )
}