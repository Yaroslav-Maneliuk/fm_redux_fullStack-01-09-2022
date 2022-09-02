import ACTION_TYPES from "../actions/actionTypes";
const initialState = {
  users: [],
  isFatching: false,
  error: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_USER_REQUEST: {
      return {
        ...state,
        isFatching: true,
        error: null
      };
    }
    case ACTION_TYPES.CREATE_USER_SUCCESS: {
      const { values: user } = action;
      return {
        ...state,
        isFatching: false,
        error: null,
        users:[...state.users, user]
      };
    }
    case ACTION_TYPES.CREATE_USER_ERROR: {
      const { error } = action;
      return {
        ...state,
        isFatching: false,
        error
      };
    }
    default:
      return state;
  }
}

export default userReducer;
