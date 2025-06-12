import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { lazy,Suspense } from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {Provider} from 'react-redux'; 
import store from './utils/redux/store.js';
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import LoadingPage from './components/LoadingPage.jsx';
// Routing Configuration

// Lazy loading components
const CreateChannel=lazy(() => import('./components/CreateChannel.jsx'));
const ChannelPage=lazy(() => import('./components/ChannelPage.jsx'));
const CustomizeContent=lazy(() => import('./components/CustomizeContent.jsx'));
const VideoPage = lazy(() => import('./components/VideoPage.jsx'));
const ErrorElement = lazy(() => import('./components/ErrorElement.jsx'));


const appRouter=createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/createChannel',
        element: <Suspense fallback={<LoadingPage />}><CreateChannel /></Suspense>
      },
      {
        path: '/viewChannel/:channelId',
        element: <Suspense fallback={<LoadingPage />}><ChannelPage /></Suspense>
      },
      {
        path: '/customizeContent',
        element: <Suspense fallback={<LoadingPage />}><CustomizeContent /></Suspense>
      },
      {
        path: '/viewVideo/:videoId',
        element: <Suspense fallback={<LoadingPage />}><VideoPage /></Suspense>
      }
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
