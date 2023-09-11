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

        const newArray = [...state.initialPlayersList];
        const teamArray = [
          { wicketKeeper: [], batsman: [], allRounder: [], bowler: [] },
        ];
        newArray[0].wicketKeeper.map((item, index) => {
          if (item.isSelected == "true") {
            teamArray[0].wicketKeeper.push(item);
          }
        });
        newArray[0].batsman.map((item, index) => {
          if (item.isSelected == "true") {
            teamArray[0].batsman.push(item);
          }
        });
        newArray[0].allRounder.map((item, index) => {
          if (item.isSelected == "true") {
            teamArray[0].allRounder.push(item);
          }
        });
        newArray[0].bowler.map((item, index) => {
          if (item.isSelected == "true") {
            teamArray[0].bowler.push(item);
          }
        });

        state.selectedPlayerData = teamArray;
        console.log("******************");
        console.log(state.selectedPlayerData);
        console.log("******************");
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
      state.teamCreateSuccess = false;
    },

    getSelectedPlayerData: (state, action) => {
      let newArray1 = [...state.initialPlayersList];
      let newArray2 = [...state.initialPlayersList];

      newArray1[0].wicketKeeper.map((item, index) => {
        if (item.isSelected == false) {
          delete newArray2[0].wicketKeeper[index];
        }
      });

      newArray1[0].batsman.map((item, index) => {
        if (item.isSelected == false) {
          delete newArray2[0].batsman[index];
        }
      });

      newArray1[0].allRounder.map((item, index) => {
        if (item.isSelected == false) {
          delete newArray2[0].allRounder[index];
        }
      });

      newArray1[0].bowler.map((item, index) => {
        if (item.isSelected == false) {
          delete newArray2[0].bowler[index];
        }
      });

      console.log("Hi AKash **************");
      console.log(newArray2);

      state.selectedPlayerData = newArray2;
    },

    updatePlayerList: (state, action) => {},
  },
});
export const {
  addPlayer,
  removePlayer,
  addInitialPlayer,
  clearAll,
  getSelectedPlayerData,
  updatePlayerList,
} = CreateTeamSlice.actions;
export default CreateTeamSlice.reducer;
