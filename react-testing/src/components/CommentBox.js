import React, { Component } from 'react';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    //save comment in action created
    
    //reset comment box
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <h4>Add a Comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
          placeholder='Enter your comment here...'
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default CommentBox;