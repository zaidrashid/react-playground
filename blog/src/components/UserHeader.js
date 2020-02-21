import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const UserHeader = ({ user }) => {
  if (!user) {
    return null;
  }

  return <p>{user.name}</p>;
};

const mapStateToProps = (state, ownProps) => (
  { user: state.users.find(user => user.id === ownProps.userId) }
);

export default connect(mapStateToProps)(UserHeader);

UserHeader.defaultProps = {
  user: undefined,
};

UserHeader.propTypes = {
  user: PropTypes.exact({
    id: PropTypes.number,
    address: PropTypes.object,
    name: PropTypes.string,
    username: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    company: PropTypes.object,
  }),
};
