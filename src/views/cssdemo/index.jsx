import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "./index.less";

const cx = classNames.bind(style);

export default function CssDemo() {
  const [condition, setCondition] = useState(true);
  console.log(condition);
  return (
    <div className={style.testBg}>
      <h1>css demo</h1>
      <div className={style.testCssModule}>css module</div>
      <div className="test-global-class">global css</div>
      <div>
        <button
          onClick={() => {
            setCondition(!condition);
          }}
        >
          change condition
        </button>
        <div
          className={cx("testConditionCss", {
            testConditionCss1: condition,
            testConditionCss2: !condition,
          })}
        >
          condition css
        </div>
      </div>
      <div className={style.testBgImg}>test backgroud image</div>
    </div>
  );
}
