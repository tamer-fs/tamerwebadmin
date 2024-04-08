import { createHashRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login/Login";

const router = createHashRouter([
  {
    path: "/",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
