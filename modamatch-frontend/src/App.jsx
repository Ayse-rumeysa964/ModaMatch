import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Explore from "./pages/Explore";
import Analysis from "./pages/Analysis";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import TailorDetail from "./pages/TailorDetail";
import Login from "./pages/Login";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/analysis"
          element={<Analysis />}
        />

        <Route
          path="/messages"
          element={<Messages />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/tailor/:id"
          element={<TailorDetail />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;