import { EditorState, ContentState } from 'draft-js';


export const createEditorState = (text = undefined) => {
  if (!text) {
    return EditorState.createEmpty();
  }
  const contentState = ContentState.createFromText(text);
  return EditorState.createWithContent(contentState);
}


export const getEditorStateWithWordSelection = (editorState, startOffset, endOffset) => {
  const selection = editorState.getSelection().merge({
    anchorOffset: startOffset,
    focusOffset: endOffset
  });
  return EditorState.forceSelection(editorState, selection);
}
