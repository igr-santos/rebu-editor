import React, { Component, PropTypes } from 'react';
import RichUtils from '../../../RichUtils';


class FontFamilySelect extends Component {

  constructor(props) {
    super(props);
    this.state = { fontFamily: '' };
  }

  onChange(e) {
    // Change select state
    this.setState({ fontFamily: e.target.value });
    // Change editor state
    const { editorState, onChange } = this.props;
    onChange(RichUtils.toggleInlineStyle(editorState, `font-family: ${e.target.value};`));
  }

  render() {
    return (
      <select value={this.state.fontFamily} onChange={this.onChange.bind(this)}>
        <option value="">---</option>
        <option value="Arial">Arial</option>
        <option value="Courrier New">Courrier New</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
    );
  }
}

FontFamilySelect.propTypes = {
  // Injected by Toolbar
  editorState: PropTypes.object,
  onChange: PropTypes.func
}

export default FontFamilySelect;
