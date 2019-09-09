import React, { Component } from 'react';
import { BaseStyle } from './styles';

export default class A extends Component {
  render() {
    const { children, href, className, target = '_blank', onClick } = this.props;


    const props = {
      target: target,
      className: className,
      href: href,
      rel: 'noopener noreferrer nofollow',
      onClick: onClick
    };

    return (
      <a {...props}>
        <BaseStyle>
          {children}
        </BaseStyle>
      </a>
    );
  }
}
