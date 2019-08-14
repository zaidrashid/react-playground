export const selectSong = (song) => {
    // type is require, but payload is not
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

