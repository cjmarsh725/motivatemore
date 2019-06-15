import React from 'react';
import './JournalSidebar.css';
import JournalTreeNode from '../JournalTreeNode/JournalTreeNode';

const JournalSidebar = props => {
  return (
    <div className="journalsidebar-container">
      {props.getRootNodes().map(node => {
        return (<JournalTreeNode {...node} 
          getChildNodes={props.getChildNodes}
          toggleNode={props.toggleNode} />
        )})}
    </div>
  );
}

export default JournalSidebar;