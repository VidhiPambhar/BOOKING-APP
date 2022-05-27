const initialState = {
    city: null,
    dates: [],
    options: {
      adult: null,
      children: null,
      room: null,
    },
  };
  
export const searchReducer = (state, action) => {
    switch (action.type) {
      case "NEW_SEARCH":
        return action.payload;
      case "RESET_SEARCH":
        return initialState;
      default:
        return state;
    }
  };