import React, { Component, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';



// function App(){
const App = () => {

  const [data, setData] = useState({
    my_name: "Rui",
    project_name: "League of Heroes"
});

    return (
      <div className="App">
       <BrowserRouter>
       <Header my_name={data.my_name} project_name={data.project_name}></Header>
       <Content></Content>
       <Footer my_name={data.my_name}></Footer>
       </BrowserRouter>
      </div>
    );
}

export default App;
