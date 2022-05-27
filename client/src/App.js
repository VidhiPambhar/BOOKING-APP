import {useReducer, React} from "react"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import {searchReducer} from "./context/SearchReducer"
import { SearchContext } from "./context/SearchContext";

function App() {
  const [state, dispatch] = useReducer(searchReducer, {
    city: null,
    dates: [],
    options: {
      adult: null,
      children: null,
      room: null,
    },
  });
  return (
    <BrowserRouter>
      <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch : dispatch,
      }}
    >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
