import React from 'react';
import Paper from 'material-ui/Paper';
import { Col, Row } from 'react-flexbox-grid/lib';

// TODO change to label
class ContentEditor extends React.Component {
  render() {
    const fields = [];
    const keys = Object.keys(this.props.fields);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const value = this.props.fields[key];
      fields.push(
        <div>
          <span>{key}</span>
          <input type="text" value={value} />
        </div>,
      );
    } // for

    return (
      <div>
        <h1>Content Editor</h1>
        <Row>
          <Col xs={12} md={6}>
            <Paper zDepth={2} className="editor-section">
              <h3>Master English</h3>
              {fields}
            </Paper>
          </Col>
          <Col xs={12} md={6}>
            <Paper zDepth={2} className="editor-section">
              <h3>{this.props.market.name}</h3>
              {fields}

            </Paper>
          </Col>
        </Row>
      </div>
    );
  }
}

ContentEditor.propTypes = {
  market: React.PropTypes.string.isRequired,
  fields: React.PropTypes.shape({
    code: React.PropTypes.string,
    name: React.PropTypes.string,
  }).isRequired,
};

export default ContentEditor;
