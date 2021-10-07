import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { listUserDetails } from "../actions/userActions"; // action

const UserPage = ({ match }) => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.userDetail); // store

  const { loading, userInfo, error } = allUsers;

  useEffect(() => {
    dispatch(listUserDetails(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <h2>{userInfo.name}</h2>
          <div>username: {userInfo.username}</div>
          <div>email: {userInfo.email}</div>
          <Link to="/" className="btn btn-light my-3">
            Go Back
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserPage;
