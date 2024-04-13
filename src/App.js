import { createHashRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "home",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
