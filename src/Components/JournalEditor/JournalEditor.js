import React, { Component } from 'react';
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import './JournalEditor.css';

class JournalEditor extends Component {
  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1"],
    allowedAttributes: { a: ["href"] }
  }

  handleChange = e => {
    this.props.updateContent(e.target.value);
  }

  sanitize = () => {
    console.log(sanitizeHtml(this.props.content, this.sanitizeConf));
    this.props.updateContent(sanitizeHtml(this.props.content, this.sanitizeConf));
  }

  render() {
    return (
      <div className="journaleditor-container">
        {this.props.currentFile ?
        <ContentEditable
          className="editor"
          html={this.props.content}
          onChange={this.handleChange}
          onBlur={this.sanitize} />
        : null}
      </div>
    );
  }
}

export default JournalEditor;