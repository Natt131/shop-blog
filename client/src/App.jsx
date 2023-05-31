import {
createBrowserRouter,
RouterProvider,
Route,
Outlet,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
//import Footer from "./components/Footer/Footer";
import Navbar from "./compnents/Navbar/Navbar";
import Footer from "./compnents/Footer/Footer";
//import Navbar from "./components/Navbar/Navbar";
import "./app.scss"
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Profile from "./pages/Profile/Profile";
import AddProduct from "./pages/AddProducs/AddProduct";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Post/Post";


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router= createBrowserRouter([
  {
   path:"/",
   element:<Layout/>,//
   children:[ //},
   {
    path: "/",
    element: <Home />,
  },
  {
    path:"/products/:id",
    element:<Products/>
   },
   {
    path:"/product/:id",
    element:<Product/>
   },
   {
    path:"/signin",
    element:<SignIn/>
   },
   {
    path:"/signup",
    element:<SignUp/>
   },
   {
    path:"/profile",
    element:<Profile/>
   },
   {
    path:"/add_product",
    element:<AddProduct/>
   },
   {
    path:"/posts",
    element:<Posts/>
   },
   {
    path: "/post/:id",
     element: <Post />,
   },

  ],
},
])
function App() {
  return <div>
    <RouterProvider router={router}/>
    </div>;
}

export default App;
