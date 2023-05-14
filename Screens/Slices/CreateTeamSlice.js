import { createSlice } from "@reduxjs/toolkit";

export const CreateTeamSlice = createSlice({
  name: "createTeam",
  initialState: {
    wicketKeeper: [],
    batsman: [],
    allRounder: [],
    bowler: [],

    playerBucket: [],
    initialPlayersList: [],
  },

  reducers: {
    addPlayer: (state, action) => {
      if (action.payload.type === "wicketKeeper") {
        state.wicketKeeper.push(action.payload.data);
        state.playerBucket.push(action.payload.data.name);
        state.initialPlayersList = state.initialPlayersList.filter(
          (x) => x !== action.payload.data.name
        );
      }
      if (action.payload.type === "batsman") {
        state.batsman.push(action.payload.data);
        state.playerBucket.push(action.payload.data.name);
      }
      if (action.payload.type === "allRounder") {
        state.allRounder.push(action.payload.data);
        state.playerBucket.push(action.payload.data.name);
      }
      if (action.payload.type === "bowler") {
        state.bowler.push(action.payload.data);
        state.playerBucket.push(action.payload.data.name);
      }
      console.log(state.wicketKeeper);
      console.log(state.playerBucket);
      console.log(state.initialPlayersList);
    },
    removePlayer: (state, action) => {
      if (action.payload.type === "wicketKeeper") {
        state.wicketKeeper = state.wicketKeeper.filter(
          (x) => x !== action.payload.data
        );
        state.playerBucket = state.playerBucket.filter(
          (x) => x !== action.payload.data.name
        );

        state.initialPlayersList.push(action.payload.data);
      }

      console.log(state.wicketKeeper);
      console.log(state.playerBucket);
      console.log(state.initialPlayersList);
    },

    addInitialPlayer: (state, action) => {
      //console.log(action.payload);
      state.initialPlayersList = [];

      let wk = action.payload[0].wicketKeeper;
      let bat = action.payload[0].batsman;
      let aR = action.payload[0].allRounder;
      let bowl = action.payload[0].bowler;

      wk.map((item) => state.initialPlayersList.push(item.name));
      bat.map((item) => state.initialPlayersList.push(item.name));
      aR.map((item) => state.initialPlayersList.push(item.name));
      bowl.map((item) => state.initialPlayersList.push(item.name));
    },
    clearAll: (state, action) => {
      state.wicketKeeper = [];
      state.batsman = [];
      state.allRounder = [];
      state.bowler = [];
      state.playerBucket = [];
      state.initialPlayersList = [];
    },
  },
});
export const { addPlayer, removePlayer, addInitialPlayer, clearAll } =
  CreateTeamSlice.actions;
export default CreateTeamSlice.reducer;
