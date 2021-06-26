import createReducer from "@/utils/createReducer";
import { ACTION_HANDLERS } from "@/redux/actions/counter";
import initState from "@/redux/store/initState";

export default createReducer(initState.counter, ACTION_HANDLERS);

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO: {
//       const { id } = action.payload;
//       return {
//         ...state,
//         data: [...state.data, id],
//       };
//     }
//     default:
//       return state;
//   }
// }
