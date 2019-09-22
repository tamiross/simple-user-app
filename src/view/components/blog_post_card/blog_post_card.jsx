import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './styles';
import { loc } from 'texts';

export default function BlogPostCard(props) {
  const classes = useStyles();

  const renderCardActions = () => {
    return (
      <CardActions>
        <Button size="small" color="primary">
          {loc('share')}
        </Button>
        <Button size="small" color="primary">
          {loc('learnMore')}
        </Button>
      </CardActions>
    )
  }

  const renderCardContent = () => {
    const { title, content } = props;

    return (
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>z
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    )
  }

  const renderCardMedia = () => {
    const props = {
      className: classes.media,
      image: "/static/images/cards/contemplative-reptile.jpg",
      title: "Contemplative Reptile"
    }

    return (
      <CardMedia {...props} />
    )
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {renderCardMedia()}
        {renderCardContent()}
      </CardActionArea>
      {renderCardActions()}
    </Card>
  );
}