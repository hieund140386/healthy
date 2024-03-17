import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { MyPage, loader as myPageLoader } from "./pages/MyPage";
import { MyRecordPage, loader as myRecordPageLoader } from "./pages/MyRecords";
import ColumnPage, { loader as columnPageLoader } from "./pages/Column";
import { ErrorPage } from "./pages/Error";
import { NotFoundPage } from "./pages/NotFound";

import "./assets/styles/global/app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={<Outlet />} />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MyPage />,
        loader: myPageLoader,
      },
      {
        path: "/my-records",
        element: <MyRecordPage />,
        loader: myRecordPageLoader,
      },
      {
        path: "/columns",
        element: <ColumnPage />,
        loader: columnPageLoader,
      },
      {
        path: "/not-found",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
