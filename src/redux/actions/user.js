import userService from "@/services/userService";

// ================================
// Action Type
// ================================
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

const login = (loginName, password, userAuthToken) => (dispatch) => {
  console.log("login");
  userService
    .login({
      loginName: loginName,
      password: password,
      userAuthToken: userAuthToken,
    })
    .then(
      (res) => {
        console.log("login success");
        // 登录成功
        dispatch({
          type: LOG_IN,
          payload: res,
          loginName,
          password,
        });
      },
      (err) => {
        console.log("err:", err);
        // dispatch(loginFailed(err));
      }
    );
};

const logout = (token) => (dispatch) => {
  userService.logout().then(() => {
    // 登录失败
    dispatch({
      type: LOG_OUT,
    });
  });
};

/* default 导出所有 Actions Creator */
export { login, logout };

export const ACTION_HANDLERS = {
  // [LOG_IN]: (state, {payload}){}
  [LOG_IN]: (state, { payload }) => ({ ...state, ...payload }), // payload is userData
  [LOG_OUT]: (state, { payload }) => ({ ...state, isLoginSuccess: false }),
};
