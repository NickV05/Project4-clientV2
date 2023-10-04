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

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestBody = { email, password };

    if (authContext) {
      post('/auth/login', requestBody)
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
<section>
<div>
  <div className="g-6 flex h-80 items-center justify-center lg:justify-between">
    <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
      <img
       src="/umbrella.gif"
        className="w-full"
        alt="Phone image"
      />
    </div>

    <div>
      <form
        onSubmit={handleLoginSubmit}
        className="flex flex-col justify-center align-middle"
      >

        <div className="relative mb-6 flex flex-col justify-center align-middle">
                <input
                  type="email"
                  name="email"
                  onChange={handleEmail}
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
            onChange={handlePassword}
          />
        </div>

        <button
          type="submit"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Sign in
        </button>

        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 
        after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
            {errorMessage && (
              <p className="error-message">{errorMessage}</p>
            )}
            Don't have an account yet?
                  <Link to="/signup"> Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  </div>
</div>
</section>
  );
}

export default LoginPage;