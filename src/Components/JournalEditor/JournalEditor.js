import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import './JournalEditor.css';
import ReactQuill from 'react-quill';

class JournalEditor extends Component {
  handleChange = value => {
    this.props.updateContent(value);
  }

  render() {
    return (
      <div className="journaleditor-container">
        {this.props.currentFile ?
        <ReactQuill value={this.props.content || ""}
                onChange={this.handleChange}
                modules={JournalEditor.modules}
                style={{borderColor: "#8A7D73"}} />
        : null}
      </div>
    );
  }
}

JournalEditor.modules = {
  clipboard: {
    matchVisual: false
  }
}

export default JournalEditor;