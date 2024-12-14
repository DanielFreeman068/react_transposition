import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './Menu'
import Levels from './Levels'
import Tutorial from './Tutorial';
import Leaderboards from './Leaderboards';

// Import necessary components for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//routing system configuration
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/menu', element: <Menu /> },
  { path: '/levels', element: <Levels /> },
  { path: '/leaderboards', element: <Leaderboards /> },
  { path: '/tutorial', element: <Tutorial /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routing implemented */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);