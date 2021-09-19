import axios from "axios";
const API = process.env.REACT_APP_URL;
const USER_DATA = { name: "micheal" };
export async function createThread(userData = USER_DATA) {
  try {
    const response = await axios({
      method: "post",
      url: API + "/chat/thread/",
      headers: { "Content-Type": "application/json" },
      data: {
        user: userData,
      },
    });
    return { success: true, data: response.data };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      data: { message: "could not create chat an error occured" },
    };
  }
}
export async function retrieveChatThread(threadId) {
  try {
    const response = await axios({
      method: "get",
      url: API + "/chat/thread/" + threadId,
    });
    return { success: true, data: response.data };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      data: { message: "could not retrieve chats an error occured" },
    };
  }
}
export async function postMessage({ threadId, message, userData = USER_DATA }) {
  try {
    const response = await axios({
      method: "post",
      url: API + "/chat/message/",
      headers: { "Content-Type": "application/json" },
      data: {
        user: userData,
        thread: threadId,
        body: message,
        send_by_user: true,
      },
    });
    return { success: true, data: response.data };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      data: { message: "could not send message an error occured" },
    };
  }
}
