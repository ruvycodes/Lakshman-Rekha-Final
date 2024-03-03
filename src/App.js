import Articles from "./components/Articles";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home/Home";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/articles",
      element: <Articles/>
    }
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div >{routesElement}</div>
    </AuthProvider>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;

>>>>>>> 9056b1db8d7308ab9e0b1ca804516d1d2b8af540
