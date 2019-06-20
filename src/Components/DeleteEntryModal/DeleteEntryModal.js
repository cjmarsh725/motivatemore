import React from 'react';
import './DeleteEntryModal.css';

const DeleteEntryModal = props => {
  return (
    <div className="deleteentrymodal-container">
      <div className="deleteentrymodal-title">
        Are you sure you want to permanently delete this entry?
      </div>
      <div className="deleteentrymodal-btns">
        <div className="deleteentrymodal-delete-btn"
             onClick={() => {
               props.deleteFile(props.currentFile);
               props.toggle();
              }}>
          Delete
        </div>
        <div className="deleteentrymodal-cancel-btn"
             onClick={props.toggle}>
          Cancel
        </div>
      </div>
    </div>
  );
}

export default DeleteEntryModal;