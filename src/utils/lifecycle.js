import { useState, useEffect } from "react";

export function useConstruct(fn) {
  // useState 传入初始化函数 fn，只会执行一次
  useState(fn);
}

// componentDidMount
export function useDidMount(fn) {
  // 依赖项给空数组，只会执行一次
  useEffect(fn, []);
}

// componentDidUpdate
export function useDidUpdate(fn) {
  // 依赖项不传值，任何render都会执行
  useEffect(fn);
}

// componentWillUnmount

export function useUnMount(fn) {
  // 依赖项不传值，任何render都会执行
  useEffect(() => fn, []);
}
