// App.js

import React from "react";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Divs with blur class */}
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>

      {/* Uncomment the section you want to render */}
      {/* <Home /> */}
      <Home />
      {/* <Auth /> */}
    </div>
  );
}

export default App;





