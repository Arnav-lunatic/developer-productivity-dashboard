import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import SuccessPage from './components/SuccessPage.tsx'
import Profile from './components/Profile.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <><App /></>
  },
  {
    path: '/success',
    element: <><SuccessPage /></>
  },
  {
    path: '/profile',
    element: <><Profile /></>
  },
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
