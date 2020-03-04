import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '17211776205-688p48ccqm2peipam5kkhgau6q2vhgbn.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    }

    if (this.props.isSignedIn) {
      return (
        <button
          type="button"
          className="ui red google button"
          onClick={this.onSignOutClick}
        >
          <i className="google icon " />
          Sign out
        </button>
      );
    }

    return (
      <button
        type="button"
        className="ui red google button"
        onClick={this.onSignInClick}
      >
        <i className="google icon " />
        Sign in with Google
      </button>
    );
  }

  render() {
    return this.renderAuthButton();
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
});

export default connect(
  mapStateToProps,
  { signOut, signIn },
)(GoogleAuth);
