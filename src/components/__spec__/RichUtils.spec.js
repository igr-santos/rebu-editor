import { EditorState, ContentState, convertToRaw } from 'draft-js';

import RichUtils from '../RichUtils';

import { createEditorState, getEditorStateWithWordSelection } from './TestUtils';


describe('RichUtils', () => {

  describe('#toggleInlineStyle(editorState, inlineStyle)', () => {

    let editorState;

    beforeEach(() => {
      editorState = createEditorState('Lorem ipsum dolor.');
    });

    it('must apply inlineStyle in editorState', () => {
      // Force selection to first word
      editorState = getEditorStateWithWordSelection(editorState, 0, 'Lorem'.length);
      editorState = RichUtils.toggleInlineStyle(editorState, 'BOLD');
      const rawContent = convertToRaw(editorState.getCurrentContent());
      // check if bold apply
      expect(rawContent.blocks[0].inlineStyleRanges[0].style).toEqual('BOLD');
    });

    it('must apply customize inlineStyle in editorState', () => {
      // Force selection to first word
      editorState = getEditorStateWithWordSelection(editorState, 0, 'Lorem'.length);
      editorState = RichUtils.toggleInlineStyle(editorState, 'font-family: Arial;');
      const rawContent = convertToRaw(editorState.getCurrentContent());
      // check if bold apply
      expect(rawContent.blocks[0].inlineStyleRanges[0].style).toEqual('font-family: Arial;');
    });
  });
});
