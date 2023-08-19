import { configureStore } from "@reduxjs/toolkit";
import CreateTeamSlice from "./Screens/Slices/CreateTeamSlice";
import TeamInfoSlice from "./Screens/Slices/TeamInfoSlice";
import AuthInfoSlice from "./Screens/Slices/AuthInfoSlice";

export default configureStore({
  reducer: {
    createTeam: CreateTeamSlice,
    teamInfo: TeamInfoSlice,
    authInfo: AuthInfoSlice,
  },
});
