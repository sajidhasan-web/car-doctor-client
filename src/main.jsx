import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './Router/Router'




ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='container mx-auto px-5'>
     <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
 </div>
)
