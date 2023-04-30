import React from "react";
import MySideNav from './components/MySideNav'
import Sidebar from './components/Sidebar'
import Resume from './components/Resume'
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
        <MySideNav />
        <Sidebar />
        <Resume />
        <GlobalStyle />
    </>
  );
};

export default App;
