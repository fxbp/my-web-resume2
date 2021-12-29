import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Layout from './components/Layout';
import Test from './pages/Test';
import Home from './pages/Home';








function App() {
    return (

        <Router>
            <Layout >
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                    <Route path="about" element={<Test />} />
                    <Route path="/contact" element={<Test />} />
                </Routes>
            </Layout>
        </Router>
      
      
       
    );
}

export default App;
