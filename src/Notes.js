import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteGrid from './NotesGrid';
import NotesCreator from './NoteCreator';
import './Notes.css';

class Notes extends Component {
    componentWillMount() {
        this.props.loadNotes();
    }

    componentDidUpdate() {
        this.saveNoteToLocalStorage();
    }

    saveNoteToLocalStorage() {
        var notes = JSON.stringify(this.props.notes);
        localStorage.setItem('notes', notes);
    }

    render() {
        return (
            <div>
                <NotesCreator />
                <NoteGrid />
            </div>
        );
    }
}

export default connect(
    state => ({
        notes: state.notes
    }),
    dispatch => ({
        loadNotes: () => {
            dispatch({ type: 'LOAD_NOTES' });
        }
    })
)(Notes)