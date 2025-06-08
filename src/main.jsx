import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'; 
import store from './utils/redux/store.js';
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
// Routing Configuration
const appRouter=createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error Occurred</div>,
    children: [
      {
        path: '/',
        element: <Home />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>,
)
