import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { colors } from 'colors';

export const useStyles = makeStyles({
  card: {
    width: '100%'
  },

  media: {
    height: 140,
  },

  base: {
    display: 'flex',
  },

  postImage: {
    marginRight: 12,
    width: 190
  }
});

export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  paddingRight: 16,
  paddingTop: '16px',
  paddingBottom: '16px',
  borderBottom: `1px solid ${colors.borderGrey}`,
  transition: '0.3s',
  cursor: 'pointer',
  '@media (min-width: 992px)': {
    flexDirection: 'row',
    ':hover': {
      background: colors.white,
      transition: '0.3s',
      borderBottom: `1px solid ${colors.borderBlue}`
    }
  }
})



export const ImageWrapper = styled.div({
  marginRight: 12,
  width: '100%',
  '@media (min-width: 992px)': {
    maxWidth: 190
  }
})

export const BlogImage = styled.img({
  width: '100%'
})

export const Subtitle = styled.div({
  color: colors.grey,
  fontSize: 12,
  marginBottom: 4
})


export const ReadMore = styled.div({
  color: colors.lightPurple,
  fontWeight: 600
})

export const Content = styled.div({
  color: colors.deepGrey
})
