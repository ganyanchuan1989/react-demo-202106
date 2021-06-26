import { message } from "antd";
import { useDidMount } from "@/utils/lifecycle";

export default function NotFound({ history }) {
  useDidMount(() => {
    message.error("此页面暂无内容");
    history.goBack();
  });
  return null;
}
