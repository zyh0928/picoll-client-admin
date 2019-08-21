import sendRequest from "./send-request";

export { sendRequest };

export const sleep = (milliseconds: number) =>
  new Promise(resolve => setTimeout(resolve, milliseconds));
