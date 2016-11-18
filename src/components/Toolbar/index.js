import React, { Component, PropTypes } from 'react';


class Toolbar extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className="Toolbar">
        {children}
      </div>
    );
  }
}

Toolbar.propTypes = {
  editorState: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  focus: PropTypes.func.isRequired
}

export default Toolbar;
