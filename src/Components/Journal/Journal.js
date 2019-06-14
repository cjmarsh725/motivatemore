import React, {Component} from 'react';
import './Journal.css';
import values from 'lodash/values';
import JournalEditor from '../JournalEditor/JournalEditor';
import JournalSidebar from '../JournalSidebar/JournalSidebar';

class Journal extends Component {
  state = {
    fileStructure: {
      "/Entries": {
      title: "Entries",
      isVisible: true,
      isFolder: true,
      isOpen: true,
      indent: 0,
      path: "/Entries",
      children: ["/Entries/TestEntry", "/Entries/TestEntry2"]
    }, 
    "/Entries/TestEntry": {
      title: "TestEntry",
      isVisible: true,
      isFolder: false,
      isOpen: true,
      indent: 1,
      path: "/Entries/TestEntry",
      content: "This is a test entry."
    }, 
    "/Entries/TestEntry2": {
      title: "TestEntry2",
      isVisible: true,
      isFolder: false,
      isOpen: false,
      indent: 1,
      path: "/Entries/TestEntry",
      content: "This is a test entry."
    }}
  }

  // getRootNodes = () => {
  //   const { fileStructure } = this.state;
  //   return values(fileStructure).filter(node => node.isRoot === true);
  // }

  // getChildNodes = node => {
  //   const { fileStructure } = this.state;
  //   if (!node.children) return [];
  //   return node.children.map(path => fileStructure[path]);
  // }

  render() {
    return (
      <div className="journal-container">
        <JournalEditor />
        <JournalSidebar 
            fileStructure={this.state.fileStructure}
            // getRootNodes={this.getRootNodes}
            // getChildNodes={this.getChildNodes}
            />
      </div>
    );
  }
}

export default Journal;