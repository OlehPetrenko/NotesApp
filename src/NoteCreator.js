import * as React from 'react';
import { connect } from 'react-redux';
import { CirclePicker } from 'react-color';

class NoteCreator extends React.Component {
    componentWillMount() {
        this.setNoteText('');
    }

    setNoteText(text) {
        this.setState({ noteText: text });
    }

    onAddNote() {
        this.props.addNote(this.state.noteText, this.state.noteColor);

        this.setNoteText('');
        this.setState({ noteColor: '' });

    }

    handleTextChange(event) {
        this.setNoteText(event.target.value);
    }

    handleChangeColor = (color, event) => {
        this.setState({ noteColor: color.hex });
    };

    render() {
        return <div>
            <div className="note-creator">
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
            <CirclePicker
                color={this.state.noteColor}
                circleSize={20}
                colors={["#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39"]}
                circleSpacing={10}
                onChangeComplete={this.handleChangeColor.bind(this)}
            />
        </div>
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        addNote: (noteText, noteColor) => {
            dispatch({
                type: 'ADD_NOTE',
                noteText: noteText,
                noteColor: noteColor
            });
        }
    })
)(NoteCreator)