import React from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import EventList from './components/EventList';
import AddEvent from './components/AddEvent';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Signup />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/events' element={<EventList />} />
        <Route exact path='/addEvent' element={<AddEvent />} />
      </Routes>
    </>
  )
}

export default App