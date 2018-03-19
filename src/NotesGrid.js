import * as React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import Masonry from 'masonry-layout'

class NotesGrid extends React.Component {
    componentDidMount() {
        this.msnry = new Masonry(this.refs.grid, {
            itemSelector: '.note',
            // columnWidth: 200,
            gutter: 10,
            isFitWidth: true
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.notes.length !== prevProps.notes.length) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    render() {
        return <div ref="grid">
            {
                this.props.notes.map(
                    (note) => <div key={note.id} >
                        <Note id={note.id} text={note.text} color={note.color} />
                    </div>
                )
            }
        </div>;
    }
}

export default connect(
    state => ({
        notes: state.notes
    }),
    dispatch => ({})
)(NotesGrid)