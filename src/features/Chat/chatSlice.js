import { createSlice } from '@reduxjs/toolkit';
const mesesages = [
  {
    id: 1,
    content: 'chào bạn',
    sender: 'your-message',
  },
  {
    id: 2,
    content: 'hellooo',
    sender: 'other-message',
  },
];

const chatSlice = createSlice({
  name: 'chat',
  initialState: mesesages,
  reducers: {
    send(state, action) {
      const newMessages = {
        id: Date.now(),
        content: action.payload,
        sender: 'your-message',
      };
      state.push(newMessages);
    },
    remove(state, action) {
      const newsnewMessage = state.filter((message) => message.id !== action.payload);
      return newsnewMessage;
    },
    update(state, action) {
      const messagesUpdate = {
        id: action.payload.messageCurrent.id,
        content: action.payload.content,
        sender: action.payload.messageCurrent.sender,
      };
      const newMessages = [...state];
      newMessages[action.payload.index] = messagesUpdate;
      return newMessages;
    },
  },
});

const { actions, reducer } = chatSlice;
export const { send, remove, update } = actions;
export default reducer;
