import { EditorState, RichUtils, Modifier } from 'draft-js';


export default Object.assign({}, RichUtils, {

  toggleInlineStyle: (editorState, inlineStyle) => {
    // Customize toggleInlineStyle to toggle custom styles inline
    if (inlineStyle.indexOf(':') > 0) {
      // This code remove inline style with patten `font-family: Arial;`
      let contentWithoutStyle = editorState.getCurrentContent();

      const styleName = inlineStyle.split(':')[0];
      const styles = editorState
        .getCurrentInlineStyle()
        .filter(style => style.startsWith(styleName));

      styles.forEach(style => {
        contentWithoutStyle = Modifier.removeInlineStyle(
          contentWithoutStyle,
          editorState.getSelection(),
          style
        )
      });

      return RichUtils.toggleInlineStyle(
        // apply custom inline style in content without style
        EditorState.push(editorState, contentWithoutStyle, 'change-inline-style'),
        inlineStyle
      );
    }
    // Use RichUtils on draft-js by default
    return RichUtils.toggleInlineStyle(editorState, inlineStyle);
  },
});
