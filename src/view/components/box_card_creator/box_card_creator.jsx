import React, { Component } from 'react';
import BoxCard from '@components/box_card/box_card';
import { styles } from './styles';

export default class BoxCardCreator extends Component {
  renderBoxCard(item) {
    const { cardClassName, skin } = this.props;

    const props = {
      iconSrc: item.iconSrc,
      text: item.text,
      key: item.key,
      borderPosition: item.borderPosition || 'none',
      className: cardClassName,
      isLast: item.isLast,
      skin: skin
    }

    return <BoxCard {...props} />
  }

  renderBoxCards() {
    const { items } = this.props;
    return items.map(item => this.renderBoxCard(item))
  }

  render() {
    const { style, className, isWrapEnabled } = this.props;
    const wrapStyle = isWrapEnabled ? styles.wrap : styles.noWrap;
    const baseStyle = [styles.base, wrapStyle, style];

    return (
      <div style={baseStyle} className={className}>
        {this.renderBoxCards()}
      </div>
    )
  }
}
