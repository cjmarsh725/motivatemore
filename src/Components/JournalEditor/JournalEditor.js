import React, { Component } from 'react';
import ContentEditable from "react-contenteditable";
import sanitizeHtml from "sanitize-html";
import './JournalEditor.css';

class JournalEditor extends Component {
  sanitizeConf = {
    allowedTags: ["b", "i", "em", "strong", "a", "p", "h1", "br", "div"],
    allowedAttributes: { a: ["href"] }
  }

  handleInput = e => {
    this.props.updateContent(sanitizeHtml(e.target.innerHTML, this.sanitizeConf));
  }

  render() {
    return (
      <div className="journaleditor-container">
        <div className="journaleditor-html"
            dangerouslySetInnerHTML={{__html: this.props.content}}
            contentEditable="true"
            onInput={this.handleInput}></div>
      </div>
    );
  }
}

export default JournalEditor;