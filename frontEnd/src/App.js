import './App.css';
import React from 'react';

//import routing components
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import our pages
import AddCharacters from './pages/AddCharacters';
import ViewCharacters from './pages/ViewCharacters';
import UpdateCharacters from './pages/UpdateCharacters';
import ViewDemons from './pages/ViewDemons';
import ViewGiants from './pages/ViewGiants';
import ViewGods from './pages/ViewGods';
import ViewMonsters from './pages/ViewMonsters';
import ViewMortals from './pages/ViewMortals';
import ViewPrimordials from './pages/ViewPrimordials';

//import navbar
import NavigationBar from './components/navigation/NavigationBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route index element={<ViewCharacters />} />
          <Route path="viewchar" element={<ViewCharacters />} />
          <Route path="viewdem" element={<ViewDemons />} />
          <Route path="viewgi" element={<ViewGiants />} />
          <Route path="viewgo" element={<ViewGods />} />
          <Route path="viewmon" element={<ViewMonsters />} />
          <Route path="viewmor" element={<ViewMortals />} />
          <Route path="viewpri" element={<ViewPrimordials />} />  
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
