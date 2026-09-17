import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Movies from "./pages/Movies";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies/>
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;