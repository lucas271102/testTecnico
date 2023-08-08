import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import {NextUIProvider} from "@nextui-org/react";
import { Auth0Provider } from '@auth0/auth0-react'
import router from '../router/routes.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider domain='dev-wbyl32mynxyqyaw2.us.auth0.com' clientId='mSJq3USGPyrLmsWmlAk3o1q4oPQtyr09' redirectUri={window.location.origin}>

  <NextUIProvider>
  <RouterProvider router={router}/>
  </NextUIProvider>
    </Auth0Provider>
  </React.StrictMode>
)
