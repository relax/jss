import React, {Component, PropTypes} from 'react';

import Stylesheet from './stylesheet';

export default class JSS extends Component {
  static propTypes = {
    stylesheet: PropTypes.instanceOf(Stylesheet).isRequired
  }

  shouldComponentUpdate (nextProps) {
    return nextProps.stylesheet.hasUpdated();
  }

  render () {
    return <style dangerouslySetInnerHTML={{__html: this.props.stylesheet.toString()}} />;
  }
}
