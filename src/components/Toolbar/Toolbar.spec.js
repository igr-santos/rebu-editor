import React from 'react';
import { mount } from 'enzyme';

import { EditorState } from 'draft-js'
import Toolbar from './'


describe('Toolbar', () => {
  let toolbar;
  const state = {
    editorState: EditorState.createEmpty(),
    hasFocus: false,
  };

  beforeEach(() => {
    toolbar = mount(
      <Toolbar
        editorState={state.editorState}
        onChange={(editorState) => state.editorState = editorState }
        focus={() => { state.hasFocus = true }}
      />
    )
  });

  it('render without crashing', () => {
    expect(toolbar).not.toBeNull();
  });
});
