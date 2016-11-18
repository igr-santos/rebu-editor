import React from 'react';
import { mount } from 'enzyme';

import { convertToRaw } from 'draft-js';
import Editor from './';


const Button = (props) => (<button className="btn btn-success" {...props}>Ok!</button>);

describe('Editor', () => {
  let editor;

  beforeEach(() => {
    editor = mount(<Editor handleSave={() => {}} />);
  });

  it('invoke props.handleSave(content) when use `Ctrl+S`', () => {
    // TODO: Simulate Ctrl+S
  });

  describe('state.hasFocus is true', () => {

    beforeEach(() => {
      editor.setState({ hasFocus: true });
    });

    it('render button to save content when props.buttonSave passed', () => {
      editor.setProps({ buttonSave: Button });
      expect(editor.find('Button').length).toEqual(1);
    });

    it('invoke props.handleSave(content) when click in save button', () => {
      // Create save button to render in editor
      let resultSave;
      editor.setProps({ buttonSave: Button, handleSave: content => resultSave = content });

      editor.find('Button').simulate('click');
      expect(resultSave).not.toBeNull();
    });

    it('return rawContentState when click in save button', () => {
      let resultSave;
      editor.setProps({ buttonSave: Button, handleSave: content => resultSave = content });

      expect(editor.find('button').length).toEqual(1);
      editor.find('Button').simulate('click');

      const emptyValue = editor.instance().state.editorState.getCurrentContent();
      expect(resultSave).toEqual(convertToRaw(emptyValue));
    });

  });

  it('must set focus in DraftEditor when click on componet Editor', () => {
    editor.find('.Content').simulate('click');
    expect(editor.instance().state.hasFocus).toEqual(true);
  });

  it('render Toolbar without crashing', () => {
    expect(editor.find('Toolbar').length).toEqual(1);
  });


  describe('props.readOnly is true', () => {

    beforeEach(() => {
      editor.setProps({ readOnly: true });
    });

    it('should not render Button', () => {
      editor.setProps({ buttonSave: Button });
      expect(editor.find('Button').length).toEqual(0);
    });

    it('should not render Toolbar', () => {
      expect(editor.find('Toolbar').length).toEqual(0);
    });

    it('should not call focus when clicl on componet Editor', () => {
      editor.find('.Content').simulate('click');
      expect(editor.instance().state.hasFocus).toEqual(false);
    });

  });
});
