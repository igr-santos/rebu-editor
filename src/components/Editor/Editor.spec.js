import React from 'react';
import { mount } from 'enzyme';

import { convertToRaw } from 'draft-js';
import Editor from './';


const Button = (props) => (<button className="btn btn-success" {...props}>Ok!</button>);

describe('Editor', () => {
  let editor;

  beforeEach(() => {
    editor = mount(<Editor onSave={() => {}} />);
  });

  it('invoke props.onSave(content) when use `Ctrl+S`', () => {
    // TODO: Simulate Ctrl+S
  });

  it('render button to save content when props.buttonSave passed', () => {
    editor.setProps({ buttonSave: Button });
    expect(editor.find('Button').length).toEqual(1);
  });

  it('invoke props.onSave(content) when click in save button', () => {
    // Create save button to render in editor
    let resultSave;
    editor.setProps({ buttonSave: Button, onSave: content => resultSave = content });

    editor.find('Button').simulate('click');
    expect(resultSave).not.toBeNull();
  });

  it('return rawContentState when invoke save command', () => {
    let resultSave;
    editor.setProps({ buttonSave: Button, onSave: content => resultSave = content });

    editor.find('Button').simulate('click');

    const emptyValue = editor.instance().state.editorState.getCurrentContent();
    expect(resultSave).toEqual(convertToRaw(emptyValue));
  });
});
