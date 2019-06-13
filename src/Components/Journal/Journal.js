import React, {Component} from 'react';
import './Journal.css';
import JournalEditor from '../JournalEditor/JournalEditor';
import JournalSidebar from '../JournalSidebar/JournalSidebar';

class Journal extends Component {
  render() {
    return (
      <div className="journal-container">
        <JournalEditor />
        <JournalSidebar />
      </div>
    );
  }
}

export default Journal;