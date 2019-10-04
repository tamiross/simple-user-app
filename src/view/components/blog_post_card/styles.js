import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

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

export const Wrapper = styled.div`
display: flex;
padding-top: 16px;
padding-bottom: 16px;
border-bottom: 1px solid #e8e8e8;
&:hover: {
  background: white;
}
`

export const ImageWrapper = styled.div`
  margin-right: 12px;
  max-width: 190px;
`

export const Subtitle = styled.div`
  color: #888;
  font-size: 12px;
  margin-bottom: 4px;
`

export const ReadMore = styled.div`
  color: #3F51B5;
  font-weight: 600;
`

export const Content = styled.div`
  color: #353536;
`
