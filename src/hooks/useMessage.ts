interface Paramter {
  message: string;
  type: "success" | "warning" | "error";
}

/**
 * @description 提示错误消息
 */
export const useMessage = (paramter: Paramter) => {
  const { message, type } = paramter;
  if (type === "warning") {
    console.warn(message);
  } else if (type === "error") {
    console.error(message);
  } else {
    console.log(message);
  }
};
