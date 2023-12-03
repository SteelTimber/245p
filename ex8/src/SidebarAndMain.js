import React from 'react';
import './SidebarAndMain.css';
import Sidebar from './Sidebar';
import Main from './Main';

function MainLayout() {
  return (
    <div>
      <Sidebar />
      <Main />
    </div>
  );
}

export default MainLayout;
