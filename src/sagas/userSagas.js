import * as API from "../api";
import { put } from "redux-saga/effects";
import * as ActionsUserCreators from "../actions/userCreators";

export function* createUserSaga(action) {
  try {
    const {
      data: {
        data: [user],
      },
    } = yield API.createUser(action.payload.values);
    yield put(ActionsUserCreators.createUserSuccess({user}));
  } catch (error) {
    yield put(ActionsUserCreators.createUserError({error}));
  }
}

export function* getUsersSaga(action) {
  try {
    const {
      data: { data: users },
    } = yield API.getAllUsers(action.payload);
    yield put(ActionsUserCreators.getUsersSuccess({users}))
  } catch (error) {
    yield put(ActionsUserCreators.getUsersError({error}))
  }
}
