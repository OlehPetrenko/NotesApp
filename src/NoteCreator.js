import * as React from 'react';
import { connect } from 'react-redux';

class NoteCreator extends React.Component {
    componentWillMount() {
        this.setNoteText('');
    }

    setNoteText = function (text) {
        this.setState({ noteText: text });
    }

    onAddNote() {
        this.props.addNote(this.state.noteText);

        this.setNoteText('');
    }

    handleTextChange(event) {
        this.setNoteText(event.target.value);
    }

    render() {
        return <div className="note-creator">
            <div className="input-group">
                <input type="text"
                    className="form-control"
                    placeholder="Enter your note here..."
                    value={this.state.noteText}
                    onChange={this.handleTextChange.bind(this)} />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.onAddNote.bind(this)}>ADD NOTE</button>
                </span>
            </div>
        </div>
    }
}

export default connect(
    state => ({
        notes: state.notes
    }),
    dispatch => ({
        addNote: (noteText) => {
            dispatch({ type: 'ADD_NOTE', noteText: noteText });
        }
    })
)(NoteCreator)