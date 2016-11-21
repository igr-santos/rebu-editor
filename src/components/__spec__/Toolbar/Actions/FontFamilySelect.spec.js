import React from 'react';
import { mount } from 'enzyme';
import { convertToRaw } from 'draft-js';
import { createEditorState, getEditorStateWithWordSelection } from '../../TestUtils';

import { FontFamilySelect } from '../../../Toolbar/Actions';


describe('FontFamilySelect', () => {
  let select;
  const state = {
    editorState: createEditorState('Lorem ipsum dolor.'),
  }

  beforeEach(() => {
    select = mount(
      <FontFamilySelect
        editorState={state.editorState}
        onChange={editorState => state.editorState = editorState}
      />
    );
  });

  it('invoke onChange when change font family', () => {
    let changed;
    select.setProps({ onChange: () => changed = true });
    select.simulate('change', { target: { value: 'Arial' } });
    expect(changed).toEqual(true);
  });

  it('must change editorState with inline style to add font-family', () => {
    select.setProps({ editorState: getEditorStateWithWordSelection(state.editorState, 0, 5) });
    select.simulate('change', { target: { value: 'Arial' } });

    const rawContent = convertToRaw(state.editorState.getCurrentContent());

    expect(rawContent.blocks[0].inlineStyleRanges[0].style).toEqual('font-family: Arial;');
  });
});
