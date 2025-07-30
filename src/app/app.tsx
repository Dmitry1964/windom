import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppRoutes } from "./routes/routes"
import Layout from "src/pages/layout/ui/layout"

const App = ()  => {

  const router = createBrowserRouter([
    {
      path: AppRoutes.Main,
      element: (
        <>
          <Layout />
        </>
      )
    }
  ])
  return (
    <RouterProvider  router={router} />
  )
}
  
  export default App
  