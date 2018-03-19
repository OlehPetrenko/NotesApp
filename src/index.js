import React from 'react';
import ReactDOM from 'react-dom';
import Notes from './Notes';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    notes: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOAD_NOTES':
            return {
                notes: [{
                    id: 0,
                    text: "test1",
                    color: "#FFD700"
                }, {
                    id: 1,
                    text: "test2",
                    color: "#7FFFD4"
                }]
            };

        case 'ADD_NOTE':
            {
                var note = {
                    id: state.notes.length !== 0 ? state.notes[state.notes.length - 1].id + 1 : 0,
                    text: action.noteText,
                    color: action.noteColor
                }

                return {
                    notes: [...state.notes, note]
                };
            }

            case 'DELETE_NOTE':
            {
                var filteredNotes = state.notes.filter(note => note.id !== action.noteId);

                return {
                    notes: filteredNotes
                };
            }

        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Notes />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
