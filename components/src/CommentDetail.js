import React from 'react';
import faker from 'faker';

const CommentDetail = props => {
    return (
        <div className="comment">
                <a className="avatar" href="/">
                    <img alt="avatar" src={faker.image.avatar()}></img>
                </a>
                <div className="content">
                    <a href="/" className="author">{props.author}</a>
                    <div className="metadata">
                        <div className="date">
                            <i className="clock icon"></i>
                            2 mintues ago
                        </div>
                    </div>
                    <div className="text">
                        Hello World!
                    </div>
                </div>
            </div>
    );
};

export default CommentDetail;