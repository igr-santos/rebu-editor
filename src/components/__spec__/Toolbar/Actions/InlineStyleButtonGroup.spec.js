import React from 'react';
import { mount } from 'enzyme';
import { createEditorState } from '../../TestUtils';

import { InlineStyleButtonGroup } from '../../../Toolbar/Actions';


describe('InlineStyleButtonGroup', () => {
  let inlineStyle;
  const state = {
    editorState: createEditorState(),
    hasFocus: false
  }

  beforeEach(() => {
    inlineStyle = mount(
      <InlineStyleButtonGroup
        editorState={state.editorState}
        onChange={editorState => state.editorState = editorState}
        focus={() => state.hasFocus = true}
      />

    )
  })

  it('invoke onChange and focus when clicked button', () => {
    let changed;
    let focused;
    inlineStyle.setProps({
      onChange: editorState => changed = true,
      focus: () => focused = true
    });
    inlineStyle.find('button').simulate('click');
    expect(changed).toEqual(true);
    expect(focused).toEqual(true);
  });
});
