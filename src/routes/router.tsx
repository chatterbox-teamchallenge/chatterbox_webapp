import { createBrowserRouter } from "react-router-dom";
import Start from "../pages/Start/Start";
import Register from "../pages/Start/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
