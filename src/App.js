import React from 'react';
import './App.css';
import HeaderComponent from "./Components/HeaderComponent";
import HomePageComponent from "./Components/HomePageComponent";
import SignUpComponent from "./Components/SignUpComponent";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <HeaderComponent isAdmin={false} />
            <Route exact path ="/" component = {HomePageComponent} />
            <Route path = "/signup" component = {SignUpComponent}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
