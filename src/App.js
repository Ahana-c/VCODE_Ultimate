<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 96887d7 (Added Signin and Signup)
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import PrimaryPage from "./Pages/Primarypage";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <RouterProvider
  router={createBrowserRouter([
    {
      path: '/',
      element: <PrimaryPage/>,
      // errorElement: <ErrorPage />,
      children: [
        {
          // errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Login /> },
            {
              path: '/home',
              element: <Home/>,
            },
          ],
        },
      ],
    },
  ])}
/>
    </>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import Register from "./Pages/Register";
// // import Home from "./Pages/Home";
// import styles from './styles'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
>>>>>>> ec7cc13 (Added signin/signup)
>>>>>>> 96887d7 (Added Signin and Signup)
