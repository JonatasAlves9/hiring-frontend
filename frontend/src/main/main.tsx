import React from 'react'
import ReactDOM from 'react-dom/client'
import {Router} from './routing/Router.tsx'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {themeDark} from "../presentation/style/themes.ts";
import 'react-toastify/dist/ReactToastify.css'
import 'rsuite/dist/rsuite.min.css';
import './style.css'
import {ToastContainer} from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={themeDark}>
            <BrowserRouter>
                <ToastContainer/>
                <Router/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
)
