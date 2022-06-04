import "./style.css";
import Main from "./components/Main";
import { useState } from "react";
import { hasAuth } from "./services/AuthApi";
import Auth from "./contexts/auth";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isAuth, setIsAuth] = useState(hasAuth());
  return (
    <Auth.Provider value={{ isAuth }}>
      {/* It for route use */}

      <div>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Auth.Provider>
  );
}

export default App;
