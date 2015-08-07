import React, { Component } from 'react';
import Item from '../components/Item';
import range from 'lodash/utility/range';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions';

import '../index.styl';

@connect(state => state)
export default class App extends Component {

  componentWillReceiveProps (nextProps) {
    if ((this.props.hovered !== nextProps.hovered) && this.props.onHover !== undefined) {
      this.props.onHover(nextProps.hovered);
    }

    if (this.props.selected !== nextProps.selected && this.props.onSelect) {
      this.props.onSelect(nextProps.selected);
    }
  }

  render () {
    const actions = bindActionCreators(appActions, this.props.dispatch);
    return (
      <ol className="rater">
        {range(5)
          .map((index) => <Item
            {...actions}
            selected={this.props.selected}
            hovered={this.props.hovered}
            index={index + 1}
            key={`item-${index}`} />
          )
        }
      </ol>
      );
  }
}
