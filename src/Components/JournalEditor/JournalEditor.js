import React, { Component } from 'react';
import './JournalEditor.css';
import 'draft-js/dist/Draft.css';
import { Editor, EditorState } from 'draft-js';

class JournalEditor extends Component {
  render() {
    return (
      <div className="journaleditor-container">
        {this.props.editorState ?
        <Editor editorState={this.props.editorState}
                onChange={this.props.updateEditor} />
        : null}
      </div>
    );
  }
}

export default JournalEditor;