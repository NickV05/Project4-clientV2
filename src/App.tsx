import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import HomePage from "./pages/homePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

function App() {

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to='/' />
  }

  return (
    <div className="">
      <NavbarComp />
 
      <Routes>     

        <Route element={<LoggedIn />}>

        <Route path ="/" element={<HomePage/>}/>

        </Route>

        <Route element={<NotLoggedIn />}>
          
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Route>


      </Routes>
      
    </div>
  );
}
export default App;