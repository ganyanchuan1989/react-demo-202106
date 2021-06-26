import React from "react";
import { PUBLIC_PATH } from "@/utils/global";

export default function ImgDemo() {
  return (
    <div>
      <img src={`${PUBLIC_PATH}react.png`} alt="react" />
      <img src={require("@/assets/img/avatar.png")} alt="avatar" />
      <img src={require("@/assets/img/big.png")} alt="big" />
      <img src={require("@/assets/img/react.svg")} alt="svg" />
    </div>
  );
}
