import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api'
import './index.css'
import 'swiper/swiper-bundle.css'
import 'flowbite'
import "primeicons/primeicons.css";
import App from "./App.tsx";
import {Tailwind} from "./design-system/Tailwind.ts";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <PrimeReactProvider value={{ ripple: true, pt:Tailwind }}>
          <App/>
      </PrimeReactProvider>
  </React.StrictMode>,
)
