import React from 'react';
import './JournalSidebar.css';
import JournalTreeNode from '../JournalTreeNode/JournalTreeNode';

const JournalSidebar = props => {
  return (
    <div className="journalsidebar-container">
      {props.fileStructure.map(node => <JournalTreeNode {...node} />)}
    </div>
  );
}

export default JournalSidebar;