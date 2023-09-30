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
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  if (!authContext) {
    // Handle the case where AuthContext is undefined.
    return null; 
  }

  const { storeToken, authenticateUser } = authContext;

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignupSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    post('/auth/signup', user)
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
<section>
<div>
  <div className="g-6 flex h-80 flex-wrap items-center justify-center lg:justify-between">
    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
      <img
        src="/signup.gif"
        className="w-full"
        alt="Phone image"
      />
    </div>

    <div>
      <form
        onSubmit={handleSignupSubmit}
        className="flex flex-col justify-center align-middle"
      >

        <div className="relative mb-6 flex flex-col justify-center align-middle">
                <input
                  type="email"
                  name="email"
                  onChange={handleTextChange}
                  className="peer flex min-h-[auto] lg:w-1/2 sm:w-5/6 justify-center align-middle rounded border-0 bg-transparent px-3 py-[0.32rem]
                   leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 
                   data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 
                   dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0 "
                  
                   placeholder="Email address"
                />
              </div>

        <div className="relative mb-6 flex flex-col justify-center align-middle">
          <input
            type="password"
            name="password"
            className="peer block min-h-[auto] lg:w-1/2 sm:w-5/6 rounded justify-center align-middle border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] 
            outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 
            motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 
            [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput33"
            placeholder="Password"
            onChange={handleTextChange}
          />
        </div>

        <div className="relative mb-6 flex flex-col justify-center align-middle" >
          <input
            type="text"
            name="fullName"
            className="peer block min-h-[auto] lg:w-1/2 sm:w-5/6 rounded justify-center align-middle border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] 
            outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 
            motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 
            [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput33"
            placeholder="Full Name"
            onChange={handleTextChange}
          />
        </div>

        <div className="relative mb-6 flex flex-col justify-center align-middle" >
          <input
            type="text"
            name="username"
            className="peer block min-h-[auto] lg:w-1/2 sm:w-5/6 rounded justify-center align-middle border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] 
            outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 
            motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 
            [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput33"
            placeholder="Username"
            onChange={handleTextChange}
          />
        </div>

        <div className="relative mb-6 flex flex-col justify-center align-middle" >
          <input
            type="text"
            name="location"
            className="peer block min-h-[auto] lg:w-1/2 sm:w-5/6 rounded justify-center align-middle border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] 
            outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 
            motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 
            [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlInput33"
            placeholder="Location"
            onChange={handleTextChange}
          />
        </div>

        <button
          type="submit"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Sign up
        </button>

        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 
        after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
            Have an account?
            <Link to="/login" > Sign in</Link>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>
</section>
  )
}

export default SignupPage;