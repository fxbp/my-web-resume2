import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';


function App() {
    return (

        <Router>
            <Layout >
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                    <Route path="/about" element={<About />} />
                    <Route path ="/resume" element={<Resume />} />
                </Routes>
            </Layout>
        </Router>
      
      
       
    );
}

export default App;
