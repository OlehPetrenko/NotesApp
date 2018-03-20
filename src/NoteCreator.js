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
        if (this.state.noteText === '')
            return;
            
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
            <div className="note-editor">
                <textarea
                    rows={5}
                    className="textarea"
                    placeholder="Enter your note here..."
                    value={this.state.noteText}
                    onChange={this.handleTextChange.bind(this)} />
                <div>
                    <CirclePicker
                        className="color-picker"
                        color={this.state.noteColor}
                        circleSize={20}
                        colors={["#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39"]}
                        circleSpacing={10}
                        onChangeComplete={this.handleChangeColor.bind(this)} />
                    <button className="add-button" type="button" onClick={this.onAddNote.bind(this)}>ADD</button>
                </div>
            </div>
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