import { createSlice } from "@reduxjs/toolkit";

export const TeamInfoSlice = createSlice({
  name: "teamInfo",
  initialState: {
    teamInfo: [],
  },

  reducers: {
    addTeam: (state, action) => {
      state.teamInfo.push({ ...action.payload });
    },
  },
});
export const { addTeam } = TeamInfoSlice.actions;
export default TeamInfoSlice.reducer;
