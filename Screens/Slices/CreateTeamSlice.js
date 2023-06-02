import { createSlice } from "@reduxjs/toolkit";

export const CreateTeamSlice = createSlice({
  name: "createTeam",
  initialState: {
    wicketKeeper: [],
    batsman: [],
    allRounder: [],
    bowler: [],
    playerData: [],
    initialPlayersList: [],
  },

  reducers: {
    addPlayer: (state, action) => {
      if (action.payload.type === "wicketKeeper") {
        const index = state.initialPlayersList[0].wicketKeeper.findIndex(
          (player) => player.name === action.payload.data.name
        );
        const newArray = [...state.initialPlayersList];
        console.log(newArray[0].wicketKeeper[index].name);

        newArray[0].wicketKeeper[index].selected = true;
        state.initialPlayersList = newArray;
        console.log(
          "***** After Store WicketKeeper: ***********",
          state.initialPlayersList[0]
        );
        //  state.wicketKeeper.push(action.payload.data);
      }

      if (action.payload.type === "batsman") {
        const index = state.initialPlayersList[0].batsman.findIndex(
          (player) => player.name === action.payload.data.name
        );
        const newArray = [...state.initialPlayersList];
        console.log(newArray[0].batsman[index].name);

        newArray[0].batsman[index].selected = true;
        state.initialPlayersList = newArray;
        console.log(
          "***** After Store  Batsman: ***********",
          state.initialPlayersList[0]
        );
        //  state.wicketKeeper.push(action.payload.data);
      }
      //console.log(state.wicketKeeper);
    },
    removePlayer: (state, action) => {
      if (action.payload.type === "wicketKeeper") {
        state.wicketKeeper = state.wicketKeeper.filter(
          (x) => x !== action.payload.data
        );

        state.initialPlayersList.push(action.payload.data);
      }

      //console.log(state.wicketKeeper);
    },

    addInitialPlayer: (state, action) => {
      //console.log(action.payload);
      state.initialPlayersList = action.payload;
      //state.initialPlayersList.push(action.payload[0].wicketKeeper);
      //state.initialPlayersList.push(action.payload[0].batsman);

      //state.initialPlayersList.push(action.payload[0].allRounder);
      //state.initialPlayersList.push(action.payload[0].bowler);
    },
    clearAll: (state, action) => {
      state.wicketKeeper = [];
      state.batsman = [];
      state.allRounder = [];
      state.bowler = [];

      state.initialPlayersList = [];
    },
  },
});
export const { addPlayer, removePlayer, addInitialPlayer, clearAll } =
  CreateTeamSlice.actions;
export default CreateTeamSlice.reducer;
