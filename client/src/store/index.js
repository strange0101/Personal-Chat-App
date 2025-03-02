import { create } from "zustand";
import { createAuthSlice } from "./slices/auth-Slice";
import { createChatSlice } from "./slices/chat-Slice";

export const useAppStore = create()((...a) => ({
  ...createAuthSlice(...a),
  ...createChatSlice(...a),
}));
