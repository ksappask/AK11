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
    playerCount: 0,
  },

  reducers: {
    addPlayer: (state, action) => {
      if (action.payload.type === "wicketKeeper") {
        const index = state.initialPlayersList[0].wicketKeeper.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];
        console.log("Wicket Keeper");
        console.log(newArray[0].wicketKeeper[index].name);
        console.log(newArray[0].wicketKeeper[index].id);

        console.log("\n\n");

        newArray[0].wicketKeeper[index].selected = true;
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount + 1;
      }

      if (action.payload.type === "batsman") {
        const index = state.initialPlayersList[0].batsman.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];
        console.log("Batsman");
        console.log(newArray[0].batsman[index].name);
        console.log(newArray[0].batsman[index].id);

        console.log("\n\n");

        newArray[0].batsman[index].selected = true;
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount + 1;
      }

      if (action.payload.type === "allRounder") {
        const index = state.initialPlayersList[0].allRounder.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];
        console.log("All Rounder");
        console.log(newArray[0].allRounder[index].name);
        console.log(newArray[0].allRounder[index].id);

        console.log("\n\n");

        newArray[0].allRounder[index].selected = true;
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount + 1;
      }

      if (action.payload.type === "bowler") {
        const index = state.initialPlayersList[0].bowler.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];
        console.log("Bowler");
        console.log(newArray[0].bowler[index].name);
        console.log(newArray[0].bowler[index].id);

        console.log("\n\n");

        newArray[0].bowler[index].selected = true;
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount + 1;
      }
    },
    removePlayer: (state, action) => {
      if (action.payload.type === "wicketKeeper") {
        const index = state.initialPlayersList[0].wicketKeeper.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];
        console.log("Wicket Keeper");
        console.log(newArray[0].wicketKeeper[index].name);
        console.log(newArray[0].wicketKeeper[index].id);

        console.log("\n\n");

        newArray[0].wicketKeeper[index].selected = false;
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
      }

      if (action.payload.type === "batsman") {
        const index = state.initialPlayersList[0].batsman.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];
        console.log("Batsman");
        console.log(newArray[0].batsman[index].name);
        console.log(newArray[0].batsman[index].id);

        console.log("\n\n");

        newArray[0].batsman[index].selected = false;
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
      }

      if (action.payload.type === "allRounder") {
        const index = state.initialPlayersList[0].allRounder.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];
        console.log("All Rounder");
        console.log(newArray[0].allRounder[index].name);
        console.log(newArray[0].allRounder[index].id);

        console.log("\n\n");

        newArray[0].allRounder[index].selected = false;
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
      }

      if (action.payload.type === "bowler") {
        const index = state.initialPlayersList[0].bowler.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];
        console.log("Bowler");
        console.log(newArray[0].bowler[index].name);
        console.log(newArray[0].bowler[index].id);

        console.log("\n\n");

        newArray[0].bowler[index].selected = false;
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
      }

      //console.log(state.wicketKeeper);
    },

    addInitialPlayer: (state, action) => {
      state.initialPlayersList = action.payload;
    },
    clearAll: (state, action) => {
      state.wicketKeeper = [];
      state.batsman = [];
      state.allRounder = [];
      state.bowler = [];

      state.initialPlayersList = [];
    },

    getPlayerCount: (state, action) => {
      const newArray = [...state.initialPlayersList];
      let count = 0;

      newArray[0].wicketKeeper.map((item, index) => {
        console.log(item);
      });
    },
  },
});
export const {
  addPlayer,
  removePlayer,
  addInitialPlayer,
  clearAll,
  getPlayerCount,
} = CreateTeamSlice.actions;
export default CreateTeamSlice.reducer;
