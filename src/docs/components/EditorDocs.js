import React from 'react';
import DocumentComponent from '../layout/DocumentComponent';

import { Editor } from '../../components';

const components = [];
// Add your component proptype data here
// multiple component proptype documentation supported
components.push({
  name: 'Editor',
  proptypes: `{
    readOnly: PropTypes.bool,
    handleSave: PropTypes.func.isRequired,
    buttonSave: PropTypes.any,
  }`
});

const examples = [];
// Add your component example data here
// multiple examples supported
examples.push({
  name: 'Editor - Basic',
  demo: (
    <Editor handleSave={(content) => console.log(content)} />
  ),
  source: `
    <Editor handleSave={(content) => console.log(content)} />
  `
});


examples.push({
  name: 'Editor - Advanced',
  demo: (
    <Editor
      handleSave={(content) => console.log(content)}
      buttonSave={(props) => <button {...props}>Save</button>}
    />
  ),
  source: `
    <Editor
      handleSave={(content) => console.log(content)}
      buttonSave={(props) => <button {...props}>Save</button>}
    />
  `
});


const Documentation = () => {
  return (
    <DocumentComponent
      name="Editor"
      components={components}
      examples={examples}>
      <p>Description for component</p>
    </DocumentComponent>
  );
};

export default Documentation;
