import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "react";

function Profiles(props) {
  const userDivs = props.users.map((user, i) => {
    return (
      <div key={i}>
        {user.firstName} - {user.lastName}
        <Link to={`/profile/${user.id}`}>View</Link>
      </div>);
  });
  return (
    <div>{userDivs}</div>
  );
}

Profiles.propTypes = {
  users: PropTypes.func
};

export default connect(function (state) {
  return { users: state.users };
})(Profiles);
