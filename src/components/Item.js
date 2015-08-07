import React, { Component } from 'react';
import classnames from 'classnames';

export default class Item extends Component {
  constructor (props) {
    super(props);
    this.state = {
      over: false
    };
  }

  handleMouseOver () {
    this.props.hover(this.props.index);
  }

  handleMouseOut () {
    this.props.hover(this.props.selected);
  }

  handleClick () {
    this.props.select(this.props.index);
  }

  render () {
    return <li
      className={classnames({
        'rater-hover': this.props.hovered >= this.props.index
      })}
      onMouseOver={::this.handleMouseOver}
      onMouseOut={::this.handleMouseOut}
      onClick={::this.handleClick}>
      </li>;
  }
}

