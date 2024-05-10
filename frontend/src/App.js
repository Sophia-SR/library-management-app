import './index.css';
import { createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import LandingPage from './Components/Pages/LandingPage.tsx'; 
import Home from './Components/Pages/Home.tsx';
import Login from './Components/Pages/Login.tsx'
import SignUp from './Components/Pages/SignUp.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <div>404 Not Found</div>,
  },
]);
function App() {
  return (
    <>
    <RouterProvider router={router} />
     <Router>
       <Routes>
        <Route exact path="./Components/Pages/LandingPage.tsx" element={<LandingPage />}></Route>
        <Route exact path="./Components/Pages/Home.tsx" element={<Home />}></Route>
        <Route exact path="./Components/Pages/Login.tsx" element={<Login />}></Route>
        <Route exact path="./Components/Pages/SignUp.tsx" element ={<SignUp />}> </Route>
        </Routes>
     </Router>
    </>
  );
}

export default App;
