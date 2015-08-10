import React, { Component } from 'react';
import Item from '../components/Item';
import range from 'lodash/utility/range';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/AppActions';

import '../index.styl';

// https://github.com/gaearon/react-redux#inject-todos-and-all-action-creators-addtodo-completetodo--as-actions
//@connect(state => state, appActions)
@connect(state => state, dispatch => ({ actions: bindActionCreators(appActions, dispatch) }) )
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
    return (
      <ol className="rater">
        {range(8)
          .map((index) => <Item
            {...this.props.actions}
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
