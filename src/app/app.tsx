import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppRoutes } from "./routes/routes"
import Layout from "src/pages/layout/ui/layout"
import MainPage from "src/pages/main-page/ui/main-page"

const App = ()  => {

  const router = createBrowserRouter([
    {
      path: AppRoutes.Main,
      element: (
        <>
          <Layout />
        </>
      ),
      children: [
        {
          path: AppRoutes.Main,
          element: <MainPage />
        }
      ]
    }
  ])
  return (
    <RouterProvider  router={router} />
  )
}
  
  export default App
  