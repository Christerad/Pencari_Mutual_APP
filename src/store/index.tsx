import { createStore } from "redux";

const initialState = {
  user: null,
};

function reducer(state = initialState, action: any) {
  const { type, payload } = action;
  switch (type) {
    case "SET_USER":
      return { ...state, user: payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;

export type RootState = ReturnType<typeof reducer>;
