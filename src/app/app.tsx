import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import Layout from "src/pages/layout/ui/layout";
import MainPageLazy from "src/pages/main-page/ui/main-page-lazy";
import { Suspense } from "react";

const App = () => {
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
          element: <MainPageLazy />,
        },
      ],
    },
  ]);
  return (
    <Suspense fallback={<div>Loading</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
