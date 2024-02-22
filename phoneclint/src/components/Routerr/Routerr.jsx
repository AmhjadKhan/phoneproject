import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import About from "../../Pages/About/About";
import Home from "../../Pages/Home/Home";
import Service from "../../Pages/Service/Service";
import Contact from "../../Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/service',
        element:<Service />
      },
      {
        path:'/contact',
        element:<Contact />
      }
    ],
  },
]);

export default router;
