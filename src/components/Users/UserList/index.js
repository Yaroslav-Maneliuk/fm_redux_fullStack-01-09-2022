import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { connect } from "react-redux";
import * as ActionsUserCreators from "../../../actions/userCreators";

const UserList = (props) => {
  const { users, isFetching, error } = useSelector(
    ({ usersState }) => usersState
  );
  const dispatch = useDispatch();
  const getUsersRequestDispatch = ({limit, offset})=>dispatch(ActionsUserCreators.getUsersRequest({limit, offset}))

  // const { users, isFetching, error, getUsersRequestDispatch } = props;
  const loadMore = () => getUsersRequestDispatch({ offset: users.length });
  // useEffect(() => {getUsersRequestDispatch({})}, [getUsersRequestDispatch]);
  useEffect(() => {
    loadMore();
  }, []);
  return (
    <section>
      <h2>Users List</h2>
      <button onClick={loadMore}>Load More</button>
      {isFetching && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      <ul
        style={{
          maxHeight: "60vh",
          overflow: "auto",
          border: "3px solid teal",
        }}
      >
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </section>
  );
};

export default UserList;

// const mapStateToProps = ({ usersState }) => usersState;
// const mapDispatchToProps = (dispatch) => ({
//   getUsersRequestDispatch: ({ limit, offset }) =>
//     dispatch(ActionsUserCreators.getUsersRequest({ limit, offset })),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(UserList);
