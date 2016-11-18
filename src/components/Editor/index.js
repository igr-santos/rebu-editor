import React, { Component, PropTypes } from 'react';
import {
  Editor as DraftEditor,
  EditorState,
  KeyBindingUtil,
  convertToRaw,
  getDefaultKeyBinding
} from 'draft-js';

import Toolbar from '../Toolbar';

import './index.css';


class Editor extends Component {

  constructor(props) {
    super(props);

    this.state = { editorState: EditorState.createEmpty(), hasFocus: false };
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
      const { handleSave } = this.props;
      const currentContent = this.state.editorState.getCurrentContent();

      handleSave(convertToRaw(currentContent))
      return true
    }
    return false
  }

  focus() {
    if (!this.props.readOnly) {
      this.setState({
        hasFocus: true
      }, () => setTimeout(() => this.refs.editor.focus()));
    }
  }

  render() {
    const editable = !this.props.readOnly && this.state.hasFocus

    return (
      <div>
        {!this.props.readOnly ? (
          <Toolbar
            editorState={this.state.editorState}
            onChange={this.onChange.bind(this)}
            focus={this.focus.bind(this)}
          />
        ) : null}
        {/*<div className="Outside" onClick={() => this.setState({ hasFocus: false })} />*/}
        <div className="Content" onClick={this.focus.bind(this)}>
          <DraftEditor
            ref="editor"
            editorState={this.state.editorState}
            onChange={this.onChange.bind(this)}
            keyBindingFn={this.keyBindingFn.bind(this)}
            handleKeyCommand={this.handleKeyCommand.bind(this)}
          />
          <div className="clearfix"></div>
        </div>
        {/* Render button save when passed to editor */}
        {editable && this.props.buttonSave && React.createElement(this.props.buttonSave, { onClick: () => this.handleKeyCommand('save') })}
      </div>
    );
  }
}

Editor.propTypes = {
  handleSave: PropTypes.func.isRequired,
  buttonSave: PropTypes.any,
  readOnly: PropTypes.bool,
}

export default Editor;
