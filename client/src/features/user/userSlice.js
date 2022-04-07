import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { name: null, username: null };

const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    login(state, action) {
      state.value = action.payload;
    },

    logout(state) {
      state.value = initialStateValue;
      localStorage.clear();
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
