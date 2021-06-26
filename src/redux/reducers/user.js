import createReducer from "@/utils/createReducer";
import { ACTION_HANDLERS } from "@/redux/actions/user";
import initState from "@/redux/store/initState";

export default createReducer(initState.userData, ACTION_HANDLERS);
