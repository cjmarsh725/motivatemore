import React, { Component } from 'react';
import './JournalEditor.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class JournalEditor extends Component {
  handleChange = value => {
    this.props.updateContent(value);
  }

  render() {
    return (
      <div className="journaleditor-container">
        {this.props.currentFile ?
        <ReactQuill value={this.props.content || ""}
                onChange={this.handleChange} />
        : null}
      </div>
    );
  }
}

export default JournalEditor;