import './App.css';
import React from 'react';
import PodcastList from './components/PodcastList';
import {Routes, Route} from 'react-router-dom'
import podcasts from '../../../src/data';

const App = () => {

  console.log("i am in app");

  return (
   <Routes>
    <Route path='/' element={<PodcastList podcasts={podcasts} />} />
   </Routes>
  )
}

export default App