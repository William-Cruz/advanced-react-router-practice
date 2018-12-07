import React from "react";
import {connect} from "react-redux";
import PropTypes from "react";

function Profile(props) {
  const userId = {user};
  const user = props.users.find(u => u.id == userId) || {};
  return (   
    <div>
      <h3>{user.firstName} {user.lastName}</h3>
      <h4>{user.occupation}</h4>
      <p>{user.phone}</p>
      <p>
        {user.address}
      </p>
      <h3> Profile here</h3>
    </div>
  );
}

Profile.propTypes = {
  users: PropTypes.func
};


export default connect(function (state) {
  return {users: state.users};
})(Profile);

