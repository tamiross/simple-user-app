import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { loc } from 'texts';
import { ActionButtonWrapper } from './styles';


export const MediaCard = (props) => {

  const renderCardMedia = () => {
    const props = {
      component: 'img',
      alt: 'img',
      height: '140',
      image: '/x.jpg',
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
            {loc('learnMore')}
          </Button>
        </CardActions>
      </ActionButtonWrapper>
    )
  }

  const renderCardTitle = () => {
    return (
      <Typography gutterBottom variant="h5" component="h2">
        {props.name}
      </Typography>
    )
  }

  const renderCardContent = () => {
    return (
      <Typography variant="body2" color="textSecondary" component="p">
        {loc('demoText')}
      </Typography>
    )
  }

  return (
    <Card>
      <CardActionArea>
        {/* {renderCardMedia()} */}
        <CardContent>
          {renderCardTitle()}
          {renderCardContent()}
        </CardContent>
      </CardActionArea>
      {renderActionButtons()}
    </Card>
  );
}