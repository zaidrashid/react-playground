import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';
import { APP_ROUTES } from '../const/app-routes';

class PostsShow extends Component {
    componentDidMount() {
        if (!this.props.posts) {
            const { id } = this.props.match.params;

            this.props.fetchPost(id);
        }
    }

    onDeleteClick() {
        const { id } = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push(APP_ROUTES.ROOT);
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to={APP_ROUTES.ROOT}>Back to Index</Link>
                <button
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick.bind(this)}
                    >
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}

/**
 * @param {Object} posts The value from the form
 * @param {Object} ownProps the own component prop
 * @returns {Object} Redux object
 */
function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
