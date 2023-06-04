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

        newArray[0].wicketKeeper[index].isSelected = "true";
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount + 1;
      }

      if (action.payload.type === "batsman") {
        const index = state.initialPlayersList[0].batsman.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].batsman[index].isSelected = "true";
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount + 1;
      }

      if (action.payload.type === "allRounder") {
        const index = state.initialPlayersList[0].allRounder.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].allRounder[index].isSelected = "true";
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount + 1;
      }

      if (action.payload.type === "bowler") {
        const index = state.initialPlayersList[0].bowler.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].bowler[index].isSelected = "true";
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

        newArray[0].wicketKeeper[index].isSelected = "false";
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
      }

      if (action.payload.type === "batsman") {
        const index = state.initialPlayersList[0].batsman.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].batsman[index].isSelected = "false";
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
      }

      if (action.payload.type === "allRounder") {
        const index = state.initialPlayersList[0].allRounder.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].allRounder[index].isSelected = "false";
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
      }

      if (action.payload.type === "bowler") {
        const index = state.initialPlayersList[0].bowler.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].bowler[index].isSelected = "false";
        state.initialPlayersList = newArray;
        const tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
      }
    },

    addInitialPlayer: (state, action) => {
      state.initialPlayersList = action.payload;
    },
    clearAll: (state, action) => {
      state.initialPlayersList = [];
    },

    getPlayerCount: (state, action) => {
      const newArray = [...state.initialPlayersList];
      let count = 0;

      newArray[0].wicketKeeper.map((item, index) => {
        console.log(item);
      });
    },

    updatePlayerList: (state, action) => {
      const newArray = [...state.initialPlayersList];
      const type = action.payload.type;
      const limitReached = action.payload.limitReached;

      if (type === "wicketKeeper" && limitReached === true) {
        newArray[0].wicketKeeper.map((item, index) => {
          if (item.isSelected === false) {
            item.blur = true;
          }
        });

        state.initialPlayersList = newArray;
      }
    },
  },
});
export const {
  addPlayer,
  removePlayer,
  addInitialPlayer,
  clearAll,
  getPlayerCount,
  updatePlayerList,
} = CreateTeamSlice.actions;
export default CreateTeamSlice.reducer;
