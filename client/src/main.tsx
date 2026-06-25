import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './store/store.ts'
import { Provider } from 'react-redux'
import SuccessPage from './components/SuccessPage.tsx'
import Profile from './components/Profile.tsx'
import TodoPage from "./pages/TodoPage"
import LoginPage from "./pages/LoginPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        index: true,
        element: <TodoPage />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
