import React, { StrictMode } from 'react'
import {RouterProvider} from "@tanstack/react-router";
import router from './router.jsx'
import ReactDOM from "react-dom/client";
import './index.css'

const rootElement = document.getElementById('root')


if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
}
