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
import UpdatePost from "./components/Posts/UpdatePost";
import UpdateComment from "./components/Comments/UpdateComment";
import Profile from "./components/Users/Profile/Profile";
import UploadProfilePhoto from "./components/Users/Profile/UploadProfilePhoto";
import UpdateProfileForm from "./components/Users/Profile/UpdateProfileForm";
import SendEmail from "./components/Users/Emailing/SendEmail";
import AccountVerified from "./components/Users/AccountVarification/AccountVarified";
import UsersList from "./components/Users/UsersList/UsersList";
import UpdatePassword from "./components/Users/PasswordManagement/UpdatePassword";
import "./index.js";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/update-comment/:id" element={<UpdateComment />}></Route>
        <Route path="/update-post/:id" element={<UpdatePost />}></Route>
        <Route path="/create-post" element={<CreatePost />}></Route>
        <Route path="/update-category/:id" element={<UpdateCategory />}></Route>
        <Route path="/category-list" element={<CategoryList />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users" element={<UsersList />}></Route>
        <Route path="/add-category" element={<AddNewCategory />}></Route>
        <Route path="/posts" element={<PostsList />}></Route>
        <Route path="/posts/:id" element={<PostDetails />}></Route>
        <Route path="/profile/:id" element={<Profile />}></Route>
        <Route
          path="/verify-account/:token"
          element={<AccountVerified />}
        ></Route>
        <Route
          path="/upload-profile-photo"
          element={<UploadProfilePhoto />}
        ></Route>
        <Route
          path="/update-profile/:id"
          element={<UpdateProfileForm />}
        ></Route>
        <Route path="/send-email/:email" element={<SendEmail />}></Route>
        <Route path="/update-password" element={<UpdatePassword />}></Route>
      </Routes>
    </>
  );
}

export default App;
