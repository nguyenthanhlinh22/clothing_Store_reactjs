import React from 'react';
import './App.css';
import MyFooter from './compoents/Footer/Footer';
import MyHeader from './compoents/Header/Header';
import MainLayout from './compoents/Layout/Layout';

function App() {
  return <>
      <MainLayout>
        <MyHeader/>
        CONTENT
        <MyFooter/>
      </MainLayout>
  
  </>;
}

export default App;
