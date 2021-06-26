import React from "react";
import { connect } from "react-redux";
import {
  incrementSync,
  decrementSync,
  incrementAsync,
} from "@/redux/actions/counter";

function Counter({ counter, incrementSync, incrementAsync, decrementSync }) {
  const { loading, count } = counter;
  console.log(">>loading", loading);
  return (
    <div>
      <h3>Counter</h3>
      <div>
        <span
          style={{
            width: "60px",
            border: "1px solid #000",
            display: "inline-block",
            textAlign: "center",
          }}
          onClick={() => {
            const newCount = count + 1;
            incrementSync(newCount);
          }}
        >
          add
        </span>
        <span
          style={{
            width: "100px",
            border: "1px solid #000",
            display: "inline-block",
            textAlign: "center",
          }}
          onClick={() => {
            const newCount = count + 1;
            incrementAsync(newCount);
          }}
        >
          add async
        </span>
        <span
          style={{
            width: "60px",
            display: "inline-block",
            textAlign: "center",
          }}
        >
          {count}
        </span>
        <span
          style={{
            width: "60px",
            border: "1px solid #000",
            display: "inline-block",
            textAlign: "center",
          }}
          onClick={() => {
            const newCount = count - 1;
            decrementSync(newCount);
          }}
        >
          del
        </span>
      </div>
      <div style={{ display: loading ? "" : "none" }}>loading...</div>
    </div>
  );
}

// const mapStateToProps = (state, ownProps) => {
//   // ownProps 组件自身得props
//   console.log(ownProps);
//   const { counter } = state;
//   return { counter };
// };
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   increment: () => dispatch(incrementSync()), // dispatch action creator
//   decrement: () => dispatch(decrement()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default connect(({ counter }) => ({ counter }), {
  incrementSync,
  incrementAsync,
  decrementSync,
})(Counter);
