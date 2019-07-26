import React from 'react';
import './App.css';
import HeaderComponent from "./Components/HeaderComponent";
import HomePageComponent from "./Components/HomePageComponent";

function App() {
  return (
    <div className="App">
        <HeaderComponent isAdmin={false} />
        <HomePageComponent />
    </div>
  );
}

export default App;
