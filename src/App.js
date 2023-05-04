import React from "react";
import MySideNav from './components/MySideNav'
import GlobalStyle from './styles/global'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Fly500 from "./pages/Fly500";
import Ht500 from "./pages/Ht500";
import Ht410 from "./pages/Ht410";
import Ht370 from "./pages/Ht370";
import Ht330 from "./pages/Ht330";
import Ht235 from "./pages/Ht235";

function App() {
  return (
    <Router >
        <MySideNav />
        <Routes>
          <Route path='/fly500' element={<Fly500/>} />
          <Route path='/ht500' element={<Ht500/>} />
          <Route path='/ht410' element={<Ht410/>} />
          <Route path='/ht370' element={<Ht370/>} />
          <Route path='/ht330' element={<Ht330/>} />
          <Route path='/ht235' element={<Ht235/>} />
        </Routes>
        <GlobalStyle />
    </Router>
  );
};

export default App;
