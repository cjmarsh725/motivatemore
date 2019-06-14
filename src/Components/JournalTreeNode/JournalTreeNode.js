import React from 'react';
import './JournalTreeNode.css';

const getIcon = (isFolder, isOpen) => {
  if (isFolder) {
    if (isOpen) return <i className="fa fa-folder-open"></i>;
    else return <i className="fa fa-folder"></i>;
  } else {
    if (isOpen) return <i className="far fa-file"></i>;
    else return <i className="fa fa-file"></i>;
  }
}

const JournalTreeNode = props => {
  return (
    <div className="journaltreenode-container">
      <div className="journaltreenode-label" style={{marginLeft: props.indent * 10 + "px"}}>
        <div className="journaltreennode-icon">
          {getIcon(props.isFolder, props.isOpen)}
        </div>
        <div>{props.title}</div>
      </div>
    </div>
  );
}

export default JournalTreeNode;