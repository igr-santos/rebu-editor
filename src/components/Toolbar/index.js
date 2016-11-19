import React, { Component, PropTypes } from 'react';


class Toolbar extends Component {

  render() {
    const { children, ...editorProps } = this.props;

    return (
      <div className="Toolbar">
        {children && React.cloneElement(children, { ...editorProps })}
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
