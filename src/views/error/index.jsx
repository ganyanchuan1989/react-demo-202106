import React from "react";

export default function ErrorDemo() {
  const throwErrorHandle = () => {
    throw new Error("我是一个错误，大妈：你是什么垃圾？");
  };

  const nullPointerHandle = () => {
    const obj = null;
    console.log(obj.name);
  };
  return (
    <div>
      <button onClick={throwErrorHandle}>throw new Error</button>
      <button onClick={nullPointerHandle}>NullPointer</button>
    </div>
  );
}
