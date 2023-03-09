// ------------------------------------------------------
// Prerequisites
// ------------------------------------------------------
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// ------------------------------------------------------
// Route Navigations
// ------------------------------------------------------
import RootLayout from "./App/Routes/RootLayout";

// ------------------------------------------------------
// UI Components
// ------------------------------------------------------
import Home from "./App/Component/Home";
import About from "./App/Component/About";
import Skills from "./App/Component/Skills";
import Projects from "./App/Component/Projects";
import Experience from "./App/Component/Experience";
import Contact from "./App/Component/Contact";
// ------------------------------------------------------
// UI Style sheets
// ------------------------------------------------------
import './App.css';


// ------------------------------------------------------
// Web Routes
// ------------------------------------------------------
const router = createBrowserRouter([
  {
    path : "/",
    element : <RootLayout />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/skills",
        element : <Skills />
      },
      {
        path : "/projects",
        element : <Projects />
      },
      {
        path : "/experience",
        element : <Experience />
      },
      {
        path : "/contact",
        element : <Contact />
      },
    ],
  },
]);

// ------------------------------------------------------
// UI Rendering
// ------------------------------------------------------
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
