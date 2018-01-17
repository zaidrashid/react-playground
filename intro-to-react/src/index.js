import React, {Component} from 'react';
import Lodash from 'lodash';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import youtubeSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyA7hL3kFauxmTTQ0bk4Ax96e8_o-CwXxrA';
const FIRST_VIDEO = 0;
const DELAY_SEARCH_MS = 300;

// Create component
class App extends Component {
    constructor (props) {
        super(props);

        this.state = {
            'selectedVideo': null,
            'videos': []
        }

        this.videoSearch('hello world!')
    }

    videoSearch (term) {
        youtubeSearch({
            'key': API_KEY,
            term
        }, (videos) => {
            this.setState({
                'selectedVideo': videos[FIRST_VIDEO],
                videos
            });
        });
    }

    render () {
        const videoSearch = Lodash.debounce(
            (term) => this.videoSearch(term),
            DELAY_SEARCH_MS
        );

        return (
            <div>
                <SearchBar
                    onSearchTermChange={videoSearch}/>

                <VideoDetail video={this.state.selectedVideo} />

                <VideoList
                    onVideoSelect={(selectedVideo) =>
                        this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}

// Put in DOM
ReactDOM.render(<App />, document.querySelector('.container'))
