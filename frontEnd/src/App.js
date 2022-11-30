import './App.css';
import React from 'react';

//import routing components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import our pages
import AddCharacters from './pages/AddCharacters';
import ViewCharacters from './pages/ViewCharacters';
import UpdateCharacters from './pages/UpdateCharacters';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<ViewCharacters />} />
          <Route path="add" element={<AddCharacters />} />
          <Route path="update">
            <Route path= ":id" element={<UpdateCharacters />} />
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
