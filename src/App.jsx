import { Route, Routes, } from "react-router";
import "./App.css";
import { Header } from "./components/header/Header";
import { HomePage } from "./pages/home-page/HomePage";
import { RegisterPage } from "./pages/register-page/RegisterPage";



export default function App() {
  
  // const router = createHashRouter([
  //   {
  //     path: "/",
  //     element: <HomePage />
  //   },
  //   {
  //     path: "/register",
  //     element: <RegisterPage />
  //   }
  // ]);
  
  return (
    <div className="app-root">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />}/>
      </Routes> 
      {/* <RouterProvider router={router}/> */}
    </div>
  );
}