import { useState, useContext, ChangeEvent, FormEvent } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/authService";
import '../index.css'
import '../tailwindcss.css'
import {
  Input,
  Ripple,
  initTE,
} from "tw-elements";

function LoginPage() {
  initTE({ Input, Ripple });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  if (!authContext) {
    return null; 
  }

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestBody = { email, password };

    if (authContext) {
      post('/users/login', requestBody)
        .then((response) => {
          console.log('JWT token', response.data.authToken);
          authContext.storeToken(response.data.authToken);
          authContext.authenticateUser();
          navigate('/');
        })
        .catch((error) => {
          const errorDescription = error.response?.data?.message || "An error occurred.";
          setErrorMessage(errorDescription);
        });
    }
  };

  return (

(authContext.isLoading ? <img src="/spinner.gif" alt="loading" /> :

<section className="h-700">
      <div className="container h-700 px-6 py-24">
        <div className="g-6 flex h-700 flex-wrap items-center justify-center lg:justify-between">
          <div className="mb-12 mt-10  ">
            <img
              src="/umbrella.gif"
              className="w-full"
              alt="Phone image"
            />
          </div>

          <div className="md:w-4/12 lg:ml-6 lg:w-4/12 lg:mt-12">
            <form
              onSubmit={handleLoginSubmit}
              className="flex flex-col justify-center align-middle navbar-nav"
            >
              <div
                className="relative pb-6 flex justify-center align-middle"

              >
                <input
                  type="email"
                  name="email"
                  onChange={handleEmail}
                  className="peer flex text-center min-h-[auto] justify-center align-middle"
                  
                  placeholder="Email address"
                />
              </div>

              <div className="relative pb-6 flex justify-center align-middle">
                <input
                  type="password"
                  name="password"
                  onChange={handlePassword}
                  className="peer flex text-center min-h-[auto] justify-center align-middle "
                  
                   placeholder="Password"
                />
              </div>
             
              <button
                type="submit"
                className=" text-center pb-6 nav-item"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <a>Sign in</a>
              </button>
              

              <div className="my-4 flex justify-center text-center ">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200 nav-item">
                  {errorMessage && (
                    <p className="error-message">{errorMessage}</p>
                  )}
                  Don't have an account yet?
                  <Link to="/signup" className ="ml-5 "> Sign Up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>)
  );
}

export default LoginPage;