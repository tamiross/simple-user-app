import styled from 'styled-components';
import { colors } from '@colors';

export const BaseStyle = styled.div`
textDecoration: 'none';
color: ${colors.lightWhite};
transition: 0.3s;
:hover {
    color: ${colors.cadetBlue};
    transition: 0.3s
}
`