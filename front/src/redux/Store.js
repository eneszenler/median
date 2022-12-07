import { configureStore } from "@reduxjs/toolkit";
import user from "./UserSlice";
export default configureStore({
  reducer: {
    user,
  },
});