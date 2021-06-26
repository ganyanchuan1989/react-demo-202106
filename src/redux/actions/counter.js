const INCREMENT_SYNC = "INCREMENT_SYNC";
const INCREMENTING_ASYNC = "INCREMENTING_ASYNC";
const INCREMENTED_ASYNC = "INCREMENTED_ASYNC";
const DECREMENT = "DECREMENT";

const incrementSync = (count) => ({
  type: INCREMENT_SYNC,
  payload: {
    count,
  },
});

const incrementAsync = (count) => (dispatch, getState) => {
  dispatch({
    type: INCREMENTING_ASYNC,
    payload: {
      loading: true,
    },
  });
  const sid = setTimeout(() => {
    clearTimeout(sid);
    dispatch({
      type: INCREMENTED_ASYNC,
      payload: {
        loading: false,
        count,
      },
    });
  }, 2000);
};

const decrementSync = (count) => ({
  type: DECREMENT,
  payload: {
    count,
  },
});

const ACTION_HANDLERS = {
  /** reducers 内部无法访问redux中得全局状态，如果需要访问，借助thunk得getState */
  [INCREMENT_SYNC]: (state, newAction) => {
    const { payload } = newAction;
    return { ...state, ...payload };
  },
  [INCREMENTING_ASYNC]: (state, { payload }) => ({ ...state, ...payload }),
  [INCREMENTED_ASYNC]: (state, { payload }) => ({ ...state, ...payload }),
  [DECREMENT]: (state, { payload }) => ({ ...state, ...payload }),
};

export { incrementSync, incrementAsync, decrementSync, ACTION_HANDLERS };
