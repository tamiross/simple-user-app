import styled from 'styled-components';
import { colors } from 'colors';


export const ActionButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  borderTop: '1px solid rgba(200,200,200,0.3)'
})

export const Title = styled.div({
  paddingBottom: 12,
  fontSize: 18,
  fontWeight: 600,
  color: colors.heavyGrey
})

export const Content = styled.p({
  fontSize: 14,
  color: colors.heavyGrey,
  fontWeight: 400
})

export const InnerBox = styled.div({
  // 
})

export const ContentBox = styled.div({
  padding: 16
})