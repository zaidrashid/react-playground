import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    if (!this.props.user || !this.props.user.name) {
      return null;
    }

    return <p>{this.props.user.name}</p>;
  }
}

const mapStateToProps = (state, ownProps) => (
  { user: state.users.find(user => user.id === ownProps.userId) }
);

export default connect(mapStateToProps, { fetchUser })(UserHeader);

UserHeader.defaultProps = {
  user: {},
};

UserHeader.propTypes = {
  fetchUser: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  user: PropTypes.objectOf({ id: PropTypes.number, name: PropTypes.string }),
};
