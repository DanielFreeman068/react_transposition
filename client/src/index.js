import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './Menu'
import Levels from './Levels'
import Tutorial from './Tutorial';
import Leaderboards from './Leaderboards';
import LevelOne from './levels/LevelOne';
import LevelTwo from './levels/LevelTwo';
import LevelThree from './levels/LevelThree';
import LevelFour from './levels/LevelFour';

// Import necessary components for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//routing system configuration
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/menu', element: <Menu /> },
  { path: '/levels', element: <Levels /> },
  { path: '/leaderboards', element: <Leaderboards /> },
  { path: '/tutorial', element: <Tutorial /> },
  { path : '/LevelOne', element: <LevelOne /> },
  { path : '/LevelTwo', element: <LevelTwo /> },
  { path : '/LevelThree', element: <LevelThree /> },
  { path : '/LevelFour', element: <LevelFour /> },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* routing implemented */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);