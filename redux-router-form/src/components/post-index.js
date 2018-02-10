import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _Loadash from 'lodash';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _Loadash.map(this.props.posts, (post) =>
            <li className="list-group-item" key={post.id}>
                {post.title}
            </li>
        );
    }

    render() {
        return (
            <div>
            <h3>Posts</h3>
            <ul className="list-groupt">{this.renderPosts()}</ul>
            </div>
        );
    }
}

/**
 * @param {Object} state the state from redux
 * @returns {Object} Component props
 */
function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
