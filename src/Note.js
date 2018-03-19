import * as React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Note extends React.Component {
    onDelete(event) {
        this.props.deleteNote(this.props.id);
    }

    render() {
        let style = { backgroundColor: this.props.color };

        return <div className="note" style={style}>
            <span className="note-delete" onClick={this.onDelete.bind(this)}> x </span>
            {this.props.text}
        </div>
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        deleteNote: (noteId) => {
            dispatch({ type: 'DELETE_NOTE', noteId: noteId });
        }
    })
)(Note)