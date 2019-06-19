import React from 'react';
import './DeleteEntryModal.css';

const DeleteEntryModal = () => {
  return (
    <div className="deleteentrymodal-container">
      <div className="deleteentrymodal-title">
        Are you sure you want to permanently delete this entry?
      </div>
    </div>
  );
}

export default DeleteEntryModal;