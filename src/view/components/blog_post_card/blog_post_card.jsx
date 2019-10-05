import React from 'react';
import { Wrapper, ImageWrapper, Subtitle, ReadMore, BlogImage } from './styles';
import { loc } from 'texts';
import DefaultCoverImage from 'assets/images/default_cover_image.jpg'


export default function BlogPostCard(props) {
  return (
    <Wrapper className='card-wrapper'>
      <ImageWrapper className="image-wrapper">
        <BlogImage src={DefaultCoverImage} alt=""  style={{}}/>
      </ImageWrapper>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>{props.title}</h3>
        <Subtitle>Oct 3, 2009 at 8:00 | Daniel Kuhan</Subtitle>
        <p>{props.content}</p>
        <ReadMore>{loc('readMore')}</ReadMore>
      </div>
    </Wrapper>
  )
}