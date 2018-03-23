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
            {
                var localNotes = JSON.parse(localStorage.getItem('notes'));
                if (localNotes)
                    return {
                        notes: localNotes
                    };

                return state;
            }

        case 'ADD_NOTE':
            {
                var note = {
                    id: Date.now(),
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
