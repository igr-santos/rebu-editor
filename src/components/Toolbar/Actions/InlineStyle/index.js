import React, { Component, PropTypes } from 'react';
import Button from '../Button';


class InlineStyle extends Component {

  toggleInlineStyle(inlineStyle) {

  }

  render() {
    return (
      <div>
        <Button
          icon="bold"
          onClick={() => this.toggleInlineStyle('BOLD')}
        />
      </div>
    );
  }
}

InlineStyle.propTypes = {
  // Injected by Toolbar
  editorState: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  focus: PropTypes.func.isRequired
}

export default InlineStyle;
