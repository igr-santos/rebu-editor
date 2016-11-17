import React, { Component, PropTypes } from 'react';
import {
  Editor as DraftEditor,
  EditorState,
  KeyBindingUtil,
  convertToRaw,
  getDefaultKeyBinding
} from 'draft-js';


class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = { editorState: EditorState.createEmpty() };
  }

  onChange(editorState) {
    this.setState({ editorState });
  }

  keyBindingFn(e) {
    // Custom method to config command for save content with Ctrl+S shortcut
    if (e.keyCode === 83 && KeyBindingUtil.hasCommandModifier(e)) {
      return 'save'
    }
    return getDefaultKeyBinding(e)
  }

  handleKeyCommand(command) {
    if (command === 'save') {
      // Convert content in RawDraftContentState
      const currentContent = this.state.editorState.getCurrentContent();
      this.props.onSave(convertToRaw(currentContent))
      return true
    }
    return false
  }

  render() {

    return (
      <div>
        <DraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange.bind(this)}
          keyBindingFn={this.keyBindingFn.bind(this)}
          handleKeyCommand={this.handleKeyCommand.bind(this)}
        />
        {/* Render button save when passed to editor */}
        {this.props.buttonSave && React.createElement(this.props.buttonSave, { onClick: () => this.handleKeyCommand('save') })}
      </div>
    );
  }
}

Editor.propTypes = {
  onSave: PropTypes.func.isRequired,
  buttonSave: PropTypes.any,
}

export default Editor;
