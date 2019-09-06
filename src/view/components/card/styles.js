import styled from 'styled-components';
import { colors } from '@colors';

export const Base = styled.div`
border: 1px solid ${colors.softGrey};
background: ${colors.white};
border-radius: 8px;
padding: 16px;
margin: 8px 0;
`

export const Title = styled.div`
font-size: 20px;
font-weight: 600;
color: ${colors.heavyGrey};
text-transform: capitalize;
`

export const Hr = styled.hr`
opacity: 0.2;
max-width: 100%;
margin-left: 0;
`

export const ActionButton = styled.button`
padding: 4px 8px;
margin-right: 8px;
border: 1px solid ${colors.softGrey};
border-radius: 8px;
cursor: pointer;
':focus': {
    outline: 'none'
  },
`
export const ActionButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
margin: 8px 0;
`