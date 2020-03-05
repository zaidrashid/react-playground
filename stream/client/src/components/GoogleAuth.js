import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

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
      this.props.signIn(this.auth.currentUser.get().getId());
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
    const { isSignedIn } = this.props;
    if (isSignedIn === null) {
      return null;
    }

    if (isSignedIn) {
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

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn,
});

export default connect(
  mapStateToProps,
  { signOut, signIn },
)(GoogleAuth);

GoogleAuth.defaultProps = {
  isSignedIn: null,
};

GoogleAuth.propTypes = {
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  isSignedIn: PropTypes.bool,
};
