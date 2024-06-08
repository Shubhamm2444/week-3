using React Router DOM

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components

import Todoscreen from './todoscreen';
import AddTask from './addtask'; // Assuming these components exist

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todoscreen />} /> {/* Home route for Todoscreen */}
        <Route path="/add" element={<AddTask />} /> {/* Route for AddTask component */}
        {/* Add more routes for other views (if applicable) */}
      </Routes>
    </Router>
  );
};

export default App;

* Explanation:
We import the necessary components from react-router-dom.
We wrap the application with the Router component.
Inside Router, we define Routes to specify different URL paths and their corresponding components.
Route components take a path prop (URL pattern) and an element prop specifying the component to render for that path.
