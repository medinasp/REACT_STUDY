import React from "react";
import Sidebar from './components/Sidebar'
import Resume from './components/Resume'
import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
        <Sidebar />
        <Resume />
        <GlobalStyle />
    </>
  );
};

export default App;
