import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import HomePage from "./pages/homePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import BookingPage from "./pages/bookingPage";
import ReschedulePage from "./pages/reschedulePage";
import Profile from "./pages/Profile";
import { useEffect, useState } from "react";


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to='/' />
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="">
      <NavbarComp />
 
      <Routes>     

        <Route element={<LoggedIn />}>
        <Route path ="/reschedule/:id" element={<ReschedulePage/>}/>
        <Route path ="/booking/:doctorName" element={<BookingPage/>}/>
        <Route path ="/" element={<HomePage/>}/>
        <Route path ="/profile/:id" element={<Profile/>}/>

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