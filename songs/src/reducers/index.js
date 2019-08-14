import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'You were meant for us', duration: '4:14'},
        { title: 'Fool again', duration: '3:55'},
        { title: 'You and me', duration: '3:15'},
        { title: 'Someday we\'ll know', duration: '3:42'},
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type !== 'SONG_SELECTED') {
        return selectedSong;
    }
    
    return action.payload;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
