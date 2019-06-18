import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css';
import './JournalEditor.css';
import ReactQuill from 'react-quill';

class JournalEditor extends Component {
  attachRef = ref => {
    if (ref) ref.getEditor().root.setAttribute("spellcheck", false);
  }

  handleChange = value => {
    this.props.updateContent(value);
  }

  render() {
    return (
      <div className="journaleditor-container">
        {this.props.currentFile ? ( <>
        <div className="journaleditor-header no-select">
          <div className="journaleditor-entryname">{this.props.fileName}</div>
          <div className="journaleditor-trash">
            <i class="fas fa-trash"></i>
          </div>
        </div>
        <ReactQuill placeholder="Start here..."
                ref={this.attachRef}
                value={this.props.content || ""}
                onChange={this.handleChange}
                modules={JournalEditor.modules} />
        </>) : null}
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