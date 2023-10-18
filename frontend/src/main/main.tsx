import React from 'react'
import ReactDOM from 'react-dom/client'
import {routes} from './routing/Router.tsx'
import {RouterProvider} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {themeDark} from "../presentation/style/themes.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={themeDark}>
            <RouterProvider router={routes}/>
        </ThemeProvider>
    </React.StrictMode>,
)
