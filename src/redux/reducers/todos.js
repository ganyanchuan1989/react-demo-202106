import { ADD_TODO, DEL_TODO } from "../actionTypes";

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  console.log(">>>state", state);
  switch (action.type) {
    case ADD_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        data: [...state.data, id],
      };
    }
    case DEL_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        data: state.data.filter((item) => item !== id),
      };
    }
    default:
      return state;
  }
}
