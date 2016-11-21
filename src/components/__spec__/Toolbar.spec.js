import React from 'react';
import { mount } from 'enzyme';

import { EditorState } from 'draft-js'
import Toolbar from '../Toolbar';


describe('Toolbar', () => {
  let toolbar;
  const state = {
    editorState: EditorState.createEmpty(),
    hasFocus: false,
  };
  const defaultProps = {
    editorState: state.editorState,
    onChange: (editorState) => state.editorState = editorState,
    focus: () => state.hasFocus = true,
  }

  beforeEach(() => {
    toolbar = mount(
      <Toolbar {...defaultProps} />
    )
  });

  it('render without crashing', () => {
    expect(toolbar).not.toBeNull();
  });

  it('must pass editorState, onChange and focus to children props', () => {
    const Child = (props) => <div />;
    toolbar = mount(
      <Toolbar {...defaultProps}>
        <Child />
      </Toolbar>
    )

    expect(toolbar.find('Child').props().editorState).toEqual(defaultProps.editorState);
    expect(toolbar.find('Child').props().onChange).toEqual(defaultProps.onChange);
    expect(toolbar.find('Child').props().focus).toEqual(defaultProps.focus);
  });

  it('must pass props to children when children size > 1', () => {
    const Child = (props) => <div />;
    const Child2 = (props) => <div />;
    toolbar = mount(
      <Toolbar {...defaultProps}>
        <Child />
        <Child2 />
      </Toolbar>
    )

    expect(toolbar.find('Child').props().editorState).toEqual(defaultProps.editorState);
    expect(toolbar.find('Child2').props().editorState).toEqual(defaultProps.editorState);
  });
});
