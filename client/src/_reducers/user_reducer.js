/* eslint-disable no-unreachable */
/* eslint-disable import/no-anonymous-default-export */
import { AUTH_USER } from "../_actions/types";

export default function (state = {}, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, userData: action.payload };
      break;
    default:
      return state;
  }
}
