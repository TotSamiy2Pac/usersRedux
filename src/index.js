import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import {history} from "./lib/history";
// import {ThemeProvider} from '@mui/material/styles';
// import theme from "tailwindcss/defaultTheme";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ThemeProvider theme={'theme'}>
        <Provider store={store}>
            <BrowserRouter history={history}>
                <App />
            </BrowserRouter>
        </Provider>
    // </ThemeProvider>

);
