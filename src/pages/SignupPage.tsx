import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { post } from "../services/authService";

function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullName: "",
    location: "",
    username: "",
  });

  const [errorMessage, setErrorMessage] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    return null; 
  }

  const { storeToken, authenticateUser } = authContext;

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignupSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setLoading(true);

    post('/users/signup', user)
      .then((response) => {
        console.log('JWT token', response.data.authToken );
        storeToken(response.data.authToken)
        authenticateUser();
        navigate('/');
      })
      .catch((error) => {
        console.log("Error", error)
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    (loading ? <section className ="h-700 flex items-center justify-center"> <img src="/spinner.gif" alt="loading" /></section>  :

<section className="h-700">
<div className="container h-700 px-6 py-24">
  <div className="g-6 flex h-700 flex-wrap items-center justify-center lg:justify-between">
    <div className="mb-12 mt-10 md:mb-0 ">
      <img
        src="/signup.gif"
        className="w-full"
        alt="Phone image"
      />
    </div>

    <div>
      <form
        onSubmit={handleSignupSubmit}
        className="flex flex-col justify-center align-middle navbar-nav"
      >

        <div className="relative pb-6 flex justify-center align-middle">
                <input
                  type="email"
                  name="email"
                  onChange={handleTextChange}
                  className="peer flex text-center min-h-[auto]  justify-center align-middle"
                  
                   placeholder="Email address"
                />
              </div>

              <div className="relative pb-6 flex justify-center align-middle">
          <input
            type="password"
            name="password"
            className="peer flex text-center min-h-[auto] justify-center align-middle"
            id="exampleFormControlInput33"
            placeholder="Password"
            onChange={handleTextChange}
          />
        </div>

        <div className="relative pb-6 flex justify-center align-middle">
          <input
            type="text"
            name="fullName"
            className="peer flex text-center min-h-[auto] justify-center align-middle"
            id="exampleFormControlInput33"
            placeholder="Full Name"
            onChange={handleTextChange}
          />
        </div>

        <div className="relative pb-6 flex justify-center align-middle">
          <input
            type="text"
            name="username"
            className="peer flex text-center min-h-[auto] justify-center align-middle"
            id="exampleFormControlInput33"
            placeholder="Username"
            onChange={handleTextChange}
          />
        </div>

        <div className="relative pb-6 flex justify-center align-middle">
          <input
            type="text"
            name="location"
            className="peer flex text-center min-h-[auto] justify-center align-middle"
            id="exampleFormControlInput33"
            placeholder="Location"
            onChange={handleTextChange}
          />
        </div>

        <button
          type="submit"
          data-te-ripple-init
          data-te-ripple-color="light"
          className=" text-center pb-6 nav-item"
        >
         <a>Sign up</a> 
        </button>

        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 
        after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200 nav-item">
            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
            Have an account?
            <Link to="/login" className ="ml-5 " > Sign in</Link>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>
</section>)
  )
}

export default SignupPage;