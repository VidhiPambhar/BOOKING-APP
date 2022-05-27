import { createContext } from "react";

export const SearchContext = createContext({
  city: null,
  dates: [],
  options: {
    adult: null,
    children: null,
    room: null,
  },
});

// export const searchReducer = (state, action) => {
//   switch (action.type) {
//     case "NEW_SEARCH":
//       return action.payload;
//     case "RESET_SEARCH":
//       return initialState;
//     default:
//       return state;
//   }
// };

// export const SearchContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(searchReducer, initialState);
//   return (
//     <SearchContext.Provider
//       value={{
//         city: state.city,
//         dates: state.dates,
//         options: state.options,
//         dispatch : dispatch,
//       }}
//     >
//       {{ children }}
//     </SearchContext.Provider>
//   );
// };
