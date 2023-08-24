import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Page_1 from './pages/Page_1';
import Page_2 from './pages/Page_2';
import Page_3 from './pages/Page_3';
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/Page_1' element={<Page_1 />} />
                <Route path='/Page_2' element={<Page_2 />} />
                <Route path='/Page_3' element={<Page_3 />} />
            </Routes>
        </Router>
    );
}
 
export default App;
