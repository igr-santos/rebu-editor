import React from 'react';
import { mount } from 'enzyme';
import { EditorState } from 'draft-js';

import InlineStyle from './';


describe('InlineStyle', () => {
  let inlineStyle;
  const state = {
    editorState: EditorState.createEmpty(),
    hasFocus: false
  }

  beforeEach(() => {
    inlineStyle = mount(
      <InlineStyle
        editorState={state.editorState}
        onChange={editorState => state.editorState = editorState}
        focus={() => state.hasFocus = true}
      />

    )
  })

  it('renders without crashing', () => {
  });
});
