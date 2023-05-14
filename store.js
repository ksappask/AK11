import { configureStore } from "@reduxjs/toolkit";
import CreateTeamSlice from "./Screens/Slices/CreateTeamSlice";
import TeamInfoSlice from "./Screens/Slices/TeamInfoSlice";

export default configureStore({
  reducer: {
    createTeam: CreateTeamSlice,
    teamInfo: TeamInfoSlice,
  },
});
