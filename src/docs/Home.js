import React from 'react';
import { Link } from 'react-router';
import { PrismCode } from 'react-prism';
import { dedent } from 'dentist';
import {
  Jumbotron,
  Button,
  Container,
  Col,
  Row
} from 'reactstrap';
import { Editor } from '../components';

const example = dedent(`
  import React from 'react';
  import { Editor } from 'rebu-editor';

  const Example = () => {
    return (
      <Editor handleSave={(content) => console.log(content)} />
    );
  };

  export default Example;
`);

const Home = ({title, gh}) => {
  return (
    <div>
      <Jumbotron tag="section" className="jumbotron-header text-xs-center m-y-3">
        <Container fluid>
          <Row>
            <Col>
              <h1 className="display-4">{title}</h1>
              <p className="lead m-y-2">
                An example rebu-editor built, documented & published with <a href="https://github.com/reactstrap/component-template">Component Template</a>
              </p>
              <p>
                <Button outline color="danger" href={`https://github.com/${gh}`}>View on Github</Button>
                <Button tag={Link} color="danger" to="/documentation">Documentation</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h2>Getting Started</h2>
            <hr/>
            <p>
              Install and save the component to your project
            </p>
            <pre>
              <PrismCode className="language-bash">
                npm install rebu-editor --save
              </PrismCode>
            </pre>
            <p>
              ES6 - import the component you need
            </p>
            <div className="docs-example">
              <Editor handleSave={(content) => console.log(content)} />
            </div>
            <pre>
              <PrismCode className="language-jsx">
                {example}
              </PrismCode>
            </pre>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
