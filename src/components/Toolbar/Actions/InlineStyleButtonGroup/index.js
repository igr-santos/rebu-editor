import React, { Component, PropTypes } from 'react';

import RichUtils from '../../../RichUtils';
import Button from './Button';


class InlineStyleButtonGroup extends Component {

  toggleInlineStyle(inlineStyle) {
    const { editorState, onChange, focus } = this.props;
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    focus();
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

InlineStyleButtonGroup.propTypes = {
  // Injected by Toolbar
  editorState: PropTypes.object,
  onChange: PropTypes.func,
  focus: PropTypes.func
}

export default InlineStyleButtonGroup;
