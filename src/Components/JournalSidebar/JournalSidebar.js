import React from 'react';
import './JournalSidebar.css';
import JournalTreeNode from '../JournalTreeNode/JournalTreeNode';

const JournalSidebar = props => {
  return (
    <div className="journalsidebar-container">
      {props.getRootNodes().map(node => {
        return (<JournalTreeNode {...node} key={node.path}
          getChildNodes={props.getChildNodes}
          toggleNode={props.toggleNode}
          openFile={props.openFile} />
        )})}
    </div>
  );
}

export default JournalSidebar;