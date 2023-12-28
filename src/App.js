import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/'element={<Dashboard/>} />
            <Route path='/project/:id' element={<ProjectDetails/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;