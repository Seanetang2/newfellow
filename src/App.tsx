import React from 'react';
import logo from './logo.svg';
import './App.css';
import { mainrouter } from './Router/mainrouter';
import {RouterProvider} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterProvider router = {mainrouter} />
    </div>
  );
}

export default App;
