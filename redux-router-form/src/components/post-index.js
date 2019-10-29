import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _Loadash from 'lodash';
import { APP_ROUTES } from '../const/app-routes';

class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _Loadash.map(this.props.posts, (post) =>
            <li className="list-group-item" key={post.id}>
                <Link to={`${APP_ROUTES.POST_SHOW}${[post.id]}`}>
                    {post.title}
                </Link>
            </li>
        );
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to={APP_ROUTES.POST_NEW}>
                        Add a post
                    </Link>
                </div>
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
