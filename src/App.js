import React from "react";
import MySideNav from './components/MySideNav'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume'
import GlobalStyle from './styles/global'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Revenue from "./pages/Revenue";
import NewUsers from "./pages/NewUsers";

function App() {
  return (
    <Router >
        <MySideNav />
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/messages' element={<Messages/>} />
          <Route path='/new-users' element={<NewUsers/>} />
          <Route path='/revenue' element={<Revenue/>} />
          <Route path='/settings' element={<Settings/>} />
        </Routes>
        <GlobalStyle />
    </Router>
  );
};

export default App;
