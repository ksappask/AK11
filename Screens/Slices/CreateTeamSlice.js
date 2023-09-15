import { createSlice } from "@reduxjs/toolkit";

export const CreateTeamSlice = createSlice({
  name: "createTeam",
  initialState: {
    wicketKeeper: 0,
    batsman: 0,
    allRounder: 0,
    bowler: 0,
    selectedPlayerData: [],
    initialPlayersList: [],
    playerCount: 0,
    creditsLeft: 100,
    teamCreateSuccess: false,
  },

  reducers: {
    addPlayer: (state, action) => {
      var index = "";
      var newArray = (newArray = [...state.initialPlayersList]);

      if (action.payload.type === "wicketKeeper") {
        index = state.initialPlayersList[0].wicketKeeper.findIndex(
          (player) => player.id === action.payload.data.id
        );
      }

      if (action.payload.type === "batsman") {
        index = state.initialPlayersList[0].batsman.findIndex(
          (player) => player.id === action.payload.data.id
        );
      }

      if (action.payload.type === "allRounder") {
        index = state.initialPlayersList[0].allRounder.findIndex(
          (player) => player.id === action.payload.data.id
        );
      }

      if (action.payload.type === "bowler") {
        index = state.initialPlayersList[0].bowler.findIndex(
          (player) => player.id === action.payload.data.id
        );
      }

      if (action.payload.type === "wicketKeeper") {
        if (newArray[0].wicketKeeper[index].isBlurred === "false") {
          newArray[0].wicketKeeper[index].isSelected = "true";

          let tempCount = state.playerCount;
          state.playerCount = tempCount + 1;
          tempCount = state.wicketKeeper;
          state.wicketKeeper = tempCount + 1;
          tempCount = state.creditsLeft;
          state.creditsLeft =
            tempCount - parseFloat(newArray[0].wicketKeeper[index].credits);
        }
      }

      if (action.payload.type === "batsman") {
        if (newArray[0].batsman[index].isBlurred === "false") {
          newArray[0].batsman[index].isSelected = "true";

          let tempCount = state.playerCount;
          state.playerCount = tempCount + 1;
          tempCount = state.batsman;
          state.batsman = tempCount + 1;
          tempCount = state.creditsLeft;
          state.creditsLeft =
            tempCount - parseFloat(newArray[0].batsman[index].credits);
        }
      }

      if (action.payload.type === "allRounder") {
        if (newArray[0].allRounder[index].isBlurred === "false") {
          newArray[0].allRounder[index].isSelected = "true";

          let tempCount = state.playerCount;
          state.playerCount = tempCount + 1;
          tempCount = state.allRounder;
          state.allRounder = tempCount + 1;
          tempCount = state.creditsLeft;
          state.creditsLeft =
            tempCount - parseFloat(newArray[0].allRounder[index].credits);
        }
      }

      if (action.payload.type === "bowler") {
        if (newArray[0].bowler[index].isBlurred === "false") {
          newArray[0].bowler[index].isSelected = "true";

          let tempCount = state.playerCount;
          state.playerCount = tempCount + 1;
          tempCount = state.bowler;
          state.bowler = tempCount + 1;
          tempCount = state.creditsLeft;
          state.creditsLeft =
            tempCount - parseFloat(newArray[0].bowler[index].credits);
        }
      }

      if (state.playerCount === 11) {
        newArray[0].wicketKeeper.map((item, indexValue) => {
          if (item.isSelected === "false") {
            item.isBlurred = "true";
          }
        });

        newArray[0].batsman.map((item, indexValue) => {
          if (item.isSelected === "false") {
            item.isBlurred = "true";
          }
        });

        newArray[0].allRounder.map((item, indexValue) => {
          if (item.isSelected === "false") {
            item.isBlurred = "true";
          }
        });

        newArray[0].bowler.map((item, indexValue) => {
          if (item.isSelected === "false") {
            item.isBlurred = "true";
          }
        });
      }

      newArray[0].wicketKeeper.map((item, indexValue) => {
        if (item.isSelected === "false") {
          if (
            parseFloat(newArray[0].wicketKeeper[indexValue].credits) >
            state.creditsLeft
          ) {
            item.isBlurred = "true";
          }
        }
      });

      newArray[0].batsman.map((item, indexValue) => {
        if (item.isSelected === "false") {
          if (
            parseFloat(newArray[0].batsman[indexValue].credits) >
            state.creditsLeft
          ) {
            item.isBlurred = "true";
          }
        }
      });

      newArray[0].allRounder.map((item, indexValue) => {
        if (item.isSelected === "false") {
          if (
            parseFloat(newArray[0].allRounder[indexValue].credits) >
            state.creditsLeft
          ) {
            item.isBlurred = "true";
          }
        }
      });

      newArray[0].bowler.map((item, indexValue) => {
        if (item.isSelected === "false") {
          if (
            parseFloat(newArray[0].bowler[indexValue].credits) >
            state.creditsLeft
          ) {
            item.isBlurred = "true";
          }
        }
      });

      if (
        state.playerCount === 11 &&
        state.wicketKeeper >= 1 &&
        state.batsman >= 1 &&
        state.allRounder >= 1 &&
        state.bowler >= 1
      ) {
        state.teamCreateSuccess = true;

        const teamArray = [
          { wicketKeeper: [], batsman: [], allRounder: [], bowler: [] },
        ];
        newArray[0].wicketKeeper.map((item, index) => {
          if (item.isSelected === "true") {
            teamArray[0].wicketKeeper.push(item);
          }
        });
        newArray[0].batsman.map((item, index) => {
          if (item.isSelected === "true") {
            teamArray[0].batsman.push(item);
          }
        });
        newArray[0].allRounder.map((item, index) => {
          if (item.isSelected === "true") {
            teamArray[0].allRounder.push(item);
          }
        });
        newArray[0].bowler.map((item, index) => {
          if (item.isSelected === "true") {
            teamArray[0].bowler.push(item);
          }
        });

        state.selectedPlayerData = teamArray;
      }

      state.initialPlayersList = newArray;
    },
    removePlayer: (state, action) => {
      var index = "";
      var newArray = (newArray = [...state.initialPlayersList]);

      if (action.payload.type === "wicketKeeper") {
        index = state.initialPlayersList[0].wicketKeeper.findIndex(
          (player) => player.id === action.payload.data.id
        );
      }

      if (action.payload.type === "batsman") {
        index = state.initialPlayersList[0].batsman.findIndex(
          (player) => player.id === action.payload.data.id
        );
      }

      if (action.payload.type === "allRounder") {
        index = state.initialPlayersList[0].allRounder.findIndex(
          (player) => player.id === action.payload.data.id
        );
      }

      if (action.payload.type === "bowler") {
        index = state.initialPlayersList[0].bowler.findIndex(
          (player) => player.id === action.payload.data.id
        );
      }

      if (action.payload.type === "wicketKeeper") {
        newArray[0].wicketKeeper[index].isSelected = "false";

        let tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
        tempCount = state.wicketKeeper;
        state.wicketKeeper = tempCount - 1;
        tempCount = state.creditsLeft;
        state.creditsLeft =
          tempCount + parseFloat(newArray[0].wicketKeeper[index].credits);
      }

      if (action.payload.type === "batsman") {
        newArray[0].batsman[index].isSelected = "false";

        let tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
        tempCount = state.batsman;
        state.batsman = tempCount - 1;
        tempCount = state.creditsLeft;
        state.creditsLeft =
          tempCount + parseFloat(newArray[0].batsman[index].credits);

        state.initialPlayersList = newArray;
      }

      if (action.payload.type === "allRounder") {
        newArray[0].allRounder[index].isSelected = "false";

        let tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
        tempCount = state.allRounder;
        state.allRounder = tempCount - 1;
        tempCount = state.creditsLeft;
        state.creditsLeft =
          tempCount + parseFloat(newArray[0].allRounder[index].credits);

        state.initialPlayersList = newArray;
      }

      if (action.payload.type === "bowler") {
        newArray[0].bowler[index].isSelected = "false";

        let tempCount = state.playerCount;
        state.playerCount = tempCount - 1;
        tempCount = state.bowler;
        state.bowler = tempCount - 1;
        tempCount = state.creditsLeft;
        state.creditsLeft =
          tempCount + parseFloat(newArray[0].bowler[index].credits);

        state.initialPlayersList = newArray;
      }

      if (state.playerCount >= 0 && state.playerCount < 11) {
        state.teamCreateSuccess = false;
      }

      if (state.playerCount >= 0 && state.playerCount < 11) {
        newArray[0].wicketKeeper.map((item, index) => {
          if (item.isBlurred === "true") {
            item.isBlurred = "false";
          }
        });

        newArray[0].batsman.map((item, index) => {
          if (item.isBlurred === "true") {
            item.isBlurred = "false";
          }
        });

        newArray[0].allRounder.map((item, index) => {
          if (item.isBlurred === "true") {
            item.isBlurred = "false";
          }
        });

        newArray[0].bowler.map((item, index) => {
          if (item.isBlurred === "true") {
            item.isBlurred = "false";
          }
        });
      }

      newArray[0].wicketKeeper.map((item, indexValue) => {
        if (item.isSelected === "false") {
          if (
            parseFloat(newArray[0].wicketKeeper[indexValue].credits) <=
            state.creditsLeft
          ) {
            item.isBlurred = "false";
          }
        }
      });

      newArray[0].batsman.map((item, indexValue) => {
        if (item.isSelected === "false") {
          if (
            parseFloat(newArray[0].batsman[indexValue].credits) <=
            state.creditsLeft
          ) {
            item.isBlurred = "false";
          }
        }
      });

      newArray[0].allRounder.map((item, indexValue) => {
        if (item.isSelected === "false") {
          if (
            parseFloat(newArray[0].allRounder[indexValue].credits) <=
            state.creditsLeft
          ) {
            item.isBlurred = "false";
          }
        }
      });

      newArray[0].bowler.map((item, indexValue) => {
        if (item.isSelected === "false") {
          if (
            parseFloat(newArray[0].bowler[indexValue].credits) <=
            state.creditsLeft
          ) {
            item.isBlurred = "false";
          }
        }
      });

      state.initialPlayersList = newArray;
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
      state.creditsLeft = 100;
      state.teamCreateSuccess = false;
    },
  },
});
export const { addPlayer, removePlayer, addInitialPlayer, clearAll } =
  CreateTeamSlice.actions;
export default CreateTeamSlice.reducer;
