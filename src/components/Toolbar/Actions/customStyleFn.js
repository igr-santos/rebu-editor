const getValue = (style) => {
  return style.split(':').splice(-1)[0].replace(';', '').trim();
}

export default styles => {
  const inlineStyle = {};
  // Search font-family in style
  const fontFamily = styles.filter(style => style.startsWith('font-family')).last();
  if (fontFamily) {
    inlineStyle.fontFamily = getValue(fontFamily);
  }

  return inlineStyle;
}
