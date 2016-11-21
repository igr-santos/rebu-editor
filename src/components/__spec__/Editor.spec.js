import React from 'react';
import { mount } from 'enzyme';

import { convertToRaw } from 'draft-js';
import Editor from '../Editor';


describe('Editor', () => {
  let editor;

  beforeEach(() => {
    editor = mount(<Editor onSubmit={() => {}} />);
  });

  it('invoke props.onSubmit(content) when use `Ctrl+S`', () => {
    // TODO: Simulate Ctrl+S
  });

  describe('state.hasFocus is true', () => {

    beforeEach(() => {
      editor.setState({ hasFocus: true });
    });


    it('invoke props.onSubmit(content) when click in save button', () => {
      // Create save button to render in editor
      let resultSave;
      editor.setProps({ onSubmit: content => resultSave = content });

      editor.find('.Button.Save').simulate('click');
      expect(resultSave).not.toBeNull();
    });

    it('return rawContentState when click in save button', () => {
      let resultSave;
      editor.setProps({ onSubmit: content => resultSave = content });

      expect(editor.find('.Button.Save').length).toEqual(1);
      editor.find('.Button.Save').simulate('click');

      const emptyValue = editor.instance().state.editorState.getCurrentContent();
      expect(resultSave).toEqual(convertToRaw(emptyValue));
    });

  });

  it('render button to save content', () => {
    expect(editor.find('.Button.Save').length).toEqual(1);
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

    it('should not render button', () => {
      expect(editor.find('.Button.Save').length).toEqual(0);
    });

    it('should not render Toolbar', () => {
      expect(editor.find('Toolbar').length).toEqual(0);
    });

    it('should not call focus when click on componet Editor', () => {
      editor.find('.Content').simulate('click');
      expect(editor.instance().state.hasFocus).toEqual(false);
    });

  });
});
