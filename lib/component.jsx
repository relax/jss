import React, {Component, PropTypes} from 'react';

import Stylesheet from './stylesheet';

export default class JSS extends Component {
  static propTypes = {
    stylesheet: PropTypes.instanceOf(Stylesheet).isRequired
  }

  componentDidMount () {
    // jss.on('update', this.onUpdate.bind(this));
    this.onUpdate();
  }

  onUpdate () {
    this.forceUpdate();
  }

  render () {
    return <style dangerouslySetInnerHTML={{__html: this.props.stylesheet.toString()}} />;
  }
}
