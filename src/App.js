import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Movie from './Components/Movie';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<h1>Movie type</h1>}></Route>
          <Route path='/*' element={<h1>error</h1>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
