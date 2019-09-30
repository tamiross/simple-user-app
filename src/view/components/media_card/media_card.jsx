import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { loc } from 'texts';
import { ActionButtonWrapper, Title, ContentBox, Content } from './styles';
import { Box } from 'components/box/box'

export const MediaCard = props => {
  const renderCardMedia = () => {
    const props = {
      component: 'img',
      alt: 'img',
      height: '140',
      image: props.image, // TODO: pass from outside
      title: 'title goes here'
    }

    return (
      <CardMedia {...props} />
    )
  }

  const renderActionButtons = () => {
    return (
      <ActionButtonWrapper>
        <CardActions>
          <Button size="small" color="primary">
            {loc('share')}
          </Button>
          <Button size="small" color="primary">
            {loc('contact')}
          </Button>
        </CardActions>
      </ActionButtonWrapper>
    )
  }

  const renderCardTitle = () => {
    return (
      <Title>
        {props.name}
      </Title>
    )
  }

  const renderCardContent = () => {
    return (
      <Content>
        {loc('demoText')}
      </Content>
    )
  }


  return (
    <Box style={{ height: '100%', padding: 0 }}>
      <img src={props.image} style={{ maxWidth: '100%' }} />
      <ContentBox>
        {renderCardTitle()}
        {renderCardContent()}
      </ContentBox>
      {renderActionButtons()}
    </Box>
  );
}