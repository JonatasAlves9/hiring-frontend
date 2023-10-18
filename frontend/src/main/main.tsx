import React from 'react'
import ReactDOM from 'react-dom/client'
import {Router} from './routing/Router.tsx'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {themeDark} from "../presentation/style/themes.ts";
import './style.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={themeDark}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
)
