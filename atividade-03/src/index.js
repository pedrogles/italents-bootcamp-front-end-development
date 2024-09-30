import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { ToDoListProvider } from './contexts/ToDoListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoListProvider>
      <App />
    </ToDoListProvider>
  </React.StrictMode>
);

