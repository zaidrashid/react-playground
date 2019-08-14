import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
    if (!song) {
        return null;
    }
    return (
            <div>
                <div>Song Title: {JSON.stringify(song.title)}</div>
                <div>Song Length: {JSON.stringify(song.duration)}</div>
            </div>
    );
}

const mapStateToProps = (state) => {
    return {song: state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);