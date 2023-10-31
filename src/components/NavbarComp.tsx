import { AuthContext} from "../context/auth.context";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
const authContext = useContext(AuthContext);
    if (!authContext) {
      return null;
    }
const { logOutUser, isLoggedIn, user } = authContext;
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  };


  return (
    <div className="navbar-area bg-white  ">
            <div className="container relative">
                <div className="row items-center">
                    <div className="w-full">
                        <nav className="flex items-center justify-between navbar navbar-expand-lg">
                            <a className="navbar-brand py-3" href="/">
                                <img src="/hosp.jpg" className =" w-1/3" />
                            </a>
                             <button onClick={toggleMenu} className="block navbar-toggler focus:outline-none lg:hidden" 
                            type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" 
                            aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>





                            {isMenuOpen && (
          <div className="absolute left-0 z-20 flex justify-center w-full px-5 py-3 duration-300 
          bg-white collapse navbar-collapse top-full mt-full 
           shadow " id="navbarOne">
              <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav flex flex-wrap">
                  <li className="nav-item ml-5 lg:ml-11">
                      <Link onClick={()=>{ toggleMenu();}} className="page-scroll" to="/">Home</Link>
                  </li>
                  <li className="nav-item ml-5 lg:ml-11">
                      <Link onClick={()=>{ toggleMenu();}} className="page-scroll" to={user ? `profile/${user._id}` : '#'}>Appointments</Link>
                  </li>
                  { isLoggedIn &&<li className="nav-item ml-5 lg:ml-11">
                      <button className="page-scroll"  onClick={() => {
                                logOutUser();
                                toggleMenu();
                              }}><a>Log out</a></button>
                  </li>}
              </ul>
          </div>
        )}


                            <div className="absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 
                            bg-white lg:w-auto collapse navbar-collapse lg:block top-full mt-full lg:static 
                            lg:bg-transparent shadow lg:shadow-none" id="navbarOne">
                                <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                    <li className="nav-item ml-5 lg:ml-11">
                                        <Link className="page-scroll" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item ml-5 lg:ml-11">
                                        <Link className="page-scroll" to={user ? `profile/${user._id}` : '#'}>Appointments</Link>
                                    </li>
                                    
                                    { isLoggedIn &&<li className="nav-item ml-5 lg:ml-11">
                                        <button className="page-scroll"  onClick={logOutUser}><a>Log out</a></button>
                                    </li>}
                                </ul>
                            </div> 
                        </nav> 
                    </div>
                </div> 
            </div> 
        </div> 
  );
}

export default NavbarComp;