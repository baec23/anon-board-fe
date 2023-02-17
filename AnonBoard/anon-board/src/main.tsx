import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

document.addEventListener(
    'mousedown',
    function (event) {
        if (event.detail > 1) {
            event.preventDefault();
        }
    },
    false
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
