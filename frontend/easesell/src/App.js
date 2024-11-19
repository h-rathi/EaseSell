import './App.css';
import Login from './components/Login'; // Create a Login component
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from './components/Signup';
import Home from './components/Home';
import Profile from './components/Profile';
import Sell from './components/Sell';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />, // Render the Login component at '/'
  },
  {
    path: "/home",
    element: (
      <div style={{ height: "100vh", width: "100vw" }}>
        <Home/>
        {/* <Navbar /> */}
        {/* <Card /> */}
      </div>
    ), // Render Navbar and Card at '/home'
  },
  {
    path: "/signup",
    element: (
      
        <Signup />
    )
  },
  {
    path: "/profile",
    element: (
      
        <Profile />
    )
  },
  {
    path: "/sell",
    element: (
      
        <Sell />
    )
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


// import './App.css';
// import Card from './components/Card';
// import Navbar from './components/Navbar';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// function App() {
//   return (
//     <div>
//       <Navbar/>
//       <Card/>
//     </div>
//   );
// }

// export default App;
