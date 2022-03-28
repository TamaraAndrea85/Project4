import { Routes, Route } from "react-router-dom";
import AddNewCategory from "./components/Categories/AddNewCategory";
import UpdateCategory from "./components/Categories/UpdateCategory";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navigation/Navbar";
import Register from "./components/Users/Register/Register";
import Login from "./components/Users/Login/Login";
import CategoryList from "./components/Categories/CategoryList";
import PostDetails from "./components/Posts/PostDetails";
// import PrivateProtectRoute from "./components/Navigation/ProtectedRoutes/PrivateProtectRoute";
// import AdminRoute from "./components/Navigation/ProtectedRoutes/AdminRoute";
import CreatePost from "./components/Posts/CreatePosts";
import PostsList from "./components/Posts/PostsList";
import "./index.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/create-post" element={<CreatePost />}></Route>
        <Route path="/update-category/:id" element={<UpdateCategory />}></Route>
        <Route path="/category-list" element={<CategoryList />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/add-category" element={<AddNewCategory />}></Route>
        <Route path="/posts" element={<PostsList />}></Route>
        <Route path="/posts/:id" element={<PostDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
