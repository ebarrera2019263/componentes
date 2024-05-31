import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <Content />
      </div>
    </div>
  );
};

export default App;
