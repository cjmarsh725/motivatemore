import React, { Component } from 'react';
import './Journal.css';
import values from 'lodash/values';
import { EditorState } from 'draft-js';
import JournalEditor from '../JournalEditor/JournalEditor';
import JournalSidebar from '../JournalSidebar/JournalSidebar';

class Journal extends Component {
  state = {
    fileStructure: {
      "/Entries": {
        title: "Entries",
        isRoot: true,
        isFolder: true,
        isOpen: false,
        indent: 0,
        path: "/Entries",
        children: ["/SubEntries", "/Entries/TestEntry", "/Entries/TestEntry2"]
      }, 
      "/Entries/TestEntry": {
        title: "TestEntry",
        isRoot: false,
        isFolder: false,
        isOpen: false,
        indent: 1,
        path: "/Entries/TestEntry",
        editorState: EditorState.createEmpty()
      }, 
      "/Entries/TestEntry2": {
        title: "TestEntry2",
        isRoot: false,
        isFolder: false,
        isOpen: false,
        indent: 1,
        path: "/Entries/TestEntry2",
        editorState: EditorState.createEmpty()
      },
      "/SubEntries": {
        title: "SubEntries",
        isRoot: false,
        isFolder: true,
        isOpen: false,
        indent: 1,
        path: "/SubEntries",
        children: ["/SubEntries/TestEntry3"]
      }, 
      "/SubEntries/TestEntry3": {
        title: "TestEntry3",
        isRoot: false,
        isFolder: false,
        isOpen: false,
        indent: 2,
        path: "/SubEntries/TestEntry3",
        editorState: EditorState.createEmpty()
      }
    },
    currentFile: null
  }

  getRootNodes = () => {
    const { fileStructure } = this.state;
    return values(fileStructure).filter(node => node.isRoot === true);
  }

  getChildNodes = nodePath => {
    const { fileStructure } = this.state;
    const node = fileStructure[nodePath];
    if (!node.children) return [];
    return node.children.map(path => fileStructure[path]);
  }

  toggleNode = path => {
    const { fileStructure } = this.state;
    const node = fileStructure[path];
    if (node.isFolder) node.isOpen = !node.isOpen;
    this.setState({ fileStructure });
  }

  updateEditor = editorState => {
    if (this.state.currentFile) {
      const { fileStructure } = this.state;
      fileStructure[this.state.currentFile].editorState = editorState;
      this.setState({ fileStructure });
    }
  }

  getEditorState = () => {
    if (this.state.fileStructure[this.state.currentFile]) {
      return this.state.fileStructure[this.state.currentFile].editorState;
    }
  }

  openFile = path => {
    const { fileStructure } = this.state;
    const node = fileStructure[path];
    if (node) {
      const prevNode = values(fileStructure)
          .find(n => n.isFolder === false && n.isOpen === true);
      if (prevNode) fileStructure[prevNode.path].isOpen = false;
      node.isOpen = true;
      this.setState({ fileStructure: fileStructure, currentFile: path });
    }
  }

  render() {
    return (
      <div className="journal-container">
        <JournalEditor
            updateEditor={this.updateEditor}
            currentFile={this.state.currentFile}
            editorState={this.getEditorState()} />
        <JournalSidebar 
            fileStructure={this.state.fileStructure}
            getRootNodes={this.getRootNodes}
            getChildNodes={this.getChildNodes}
            toggleNode={this.toggleNode}
            openFile={this.openFile}
            />
      </div>
    );
  }
}

export default Journal;