import { createSlice } from "@reduxjs/toolkit";

export const CreateTeamSlice = createSlice({
  name: "createTeam",
  initialState: {
    wicketKeeper: 0,
    batsman: 0,
    allRounder: 0,
    bowler: 0,
    playerData: [],
    initialPlayersList: [],
    playerCount: 0,
    teamCreateSuccess: false,
  },

  reducers: {
    addPlayer: (state, action) => {
      if (action.payload.type === "wicketKeeper") {
        const index = state.initialPlayersList[0].wicketKeeper.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].wicketKeeper[index].isSelected = "true";

        let tempCount = state.playerCount;
        state.playerCount = tempCount + 1;
        tempCount = state.wicketKeeper;
        state.wicketKeeper = tempCount + 1;

        if (state.playerCount === 11) {
          newArray[0].wicketKeeper.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });

          newArray[0].batsman.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });

          newArray[0].allRounder.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });

          newArray[0].bowler.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });
        }
        state.initialPlayersList = newArray;
      }

      if (action.payload.type === "batsman") {
        const index = state.initialPlayersList[0].batsman.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].batsman[index].isSelected = "true";

        let tempCount = state.playerCount;
        state.playerCount = tempCount + 1;
        tempCount = state.batsman;
        state.batsman = tempCount + 1;

        if (state.playerCount === 11) {
          newArray[0].wicketKeeper.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });

          newArray[0].batsman.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });

          newArray[0].allRounder.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });

          newArray[0].bowler.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });
        }

        state.initialPlayersList = newArray;
      }

      if (action.payload.type === "allRounder") {
        const index = state.initialPlayersList[0].allRounder.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].allRounder[index].isSelected = "true";

        let tempCount = state.playerCount;
        state.playerCount = tempCount + 1;
        tempCount = state.allRounder;
        state.allRounder = tempCount + 1;

        if (state.playerCount === 11) {
          newArray[0].wicketKeeper.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });

          newArray[0].batsman.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });

          newArray[0].allRounder.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });

          newArray[0].bowler.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });
        }
        state.initialPlayersList = newArray;
      }

      if (action.payload.type === "bowler") {
        const index = state.initialPlayersList[0].bowler.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].bowler[index].isSelected = "true";

        let tempCount = state.playerCount;
        state.playerCount = tempCount + 1;
        tempCount = state.bowler;
        state.bowler = tempCount + 1;

        if (state.playerCount === 11) {
          newArray[0].wicketKeeper.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });

          newArray[0].batsman.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });

          newArray[0].allRounder.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });

          newArray[0].bowler.map((item, index) => {
            if (item.isSelected == "false") {
              item.isBlurred = "true";
            }
          });
        }

        state.initialPlayersList = newArray;
      }

      if (
        state.playerCount == 11 &&
        state.wicketKeeper >= 1 &&
        state.batsman >= 1 &&
        state.allRounder >= 1 &&
        state.bowler >= 1
      ) {
        state.teamCreateSuccess = true;
      }
    },
    removePlayer: (state, action) => {
      if (action.payload.type === "wicketKeeper") {
        const index = state.initialPlayersList[0].wicketKeeper.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].wicketKeeper[index].isSelected = "false";

        let tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
        tempCount = state.wicketKeeper;
        state.wicketKeeper = tempCount - 1;

        if (state.playerCount >= 0 && state.playerCount < 11) {
          newArray[0].wicketKeeper.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });

          newArray[0].batsman.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });

          newArray[0].allRounder.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });

          newArray[0].bowler.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });
        }

        state.initialPlayersList = newArray;
      }

      if (action.payload.type === "batsman") {
        const index = state.initialPlayersList[0].batsman.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].batsman[index].isSelected = "false";

        let tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
        tempCount = state.batsman;
        state.batsman = tempCount - 1;

        if (state.playerCount >= 0 && state.playerCount < 11) {
          newArray[0].wicketKeeper.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });

          newArray[0].batsman.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });

          newArray[0].allRounder.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });

          newArray[0].bowler.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });
        }

        state.initialPlayersList = newArray;
      }

      if (action.payload.type === "allRounder") {
        const index = state.initialPlayersList[0].allRounder.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].allRounder[index].isSelected = "false";

        let tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
        tempCount = state.allRounder;
        state.allRounder = tempCount - 1;

        if (state.playerCount >= 0 && state.playerCount < 11) {
          newArray[0].wicketKeeper.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });

          newArray[0].batsman.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });

          newArray[0].allRounder.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });

          newArray[0].bowler.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });
        }

        state.initialPlayersList = newArray;
      }

      if (action.payload.type === "bowler") {
        const index = state.initialPlayersList[0].bowler.findIndex(
          (player) => player.id === action.payload.data.id
        );
        const newArray = [...state.initialPlayersList];

        newArray[0].bowler[index].isSelected = "false";

        let tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
        tempCount = state.bowler;
        state.bowler = tempCount - 1;

        if (state.playerCount >= 0 && state.playerCount < 11) {
          newArray[0].wicketKeeper.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });

          newArray[0].batsman.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });

          newArray[0].allRounder.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });

          newArray[0].bowler.map((item, index) => {
            if (item.isBlurred == "true") {
              item.isBlurred = "false";
            }
          });
        }

        state.initialPlayersList = newArray;
      }

      if (state.playerCount >= 0 && state.playerCount < 11) {
        state.teamCreateSuccess = false;
      }
    },

    addInitialPlayer: (state, action) => {
      state.initialPlayersList = action.payload;
    },
    clearAll: (state, action) => {
      state.initialPlayersList = [];
      state.wicketKeeper = 0;
      state.batsman = 0;
      state.allRounder = 0;
      state.bowler = 0;
      state.playerData = [];
      state.playerCount = 0;
    },

    getPlayerCount: (state, action) => {},

    updatePlayerList: (state, action) => {},
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
