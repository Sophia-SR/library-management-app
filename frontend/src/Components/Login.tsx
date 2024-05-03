import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';



    interface SignInFormProps {
      onSubmit: (email: string, password: string) => void;
      onSignUp: () => void;
    }

    
    const LogInForm: React.FC<SignInFormProps> = ({ onSubmit, onSignUp }) => {
      const [email, setEmail] = React.useState("");
      const [password, setPassword] = React.useState("");
      const [isValid, setIsValid] = React.useState(false);
      const { loginWithRedirect } = useAuth0();
    
      const validateForm = () => {
        setIsValid(email.length > 0 && password.length > 0); //placeholder for form validation functionality
      };
    
      /**
       * Handle the form submission event.
       *
       * Prevent the default form submission behavior and call the onSubmit
       * callback with the form's email and password values.
       *
       * @param e The form event
       */
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Prevent the form from being submitted
        // and call the onSubmit callback with the form's data.
        if (isValid) {
          onSubmit(email, password);
        }
      };

    
      return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center self-center mt-8 mb-5 max-w-full text-base leading-6 w-[480px]">
          <div className="flex flex-col text-black whitespace-nowrap max-md:max-w-full">
            <label htmlFor="email" className="max-md:max-w-full">
              Name*
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateForm();
              }}
              className={`shrink-0 mt-2 h-12 bg-white border border-black border-solid max-md:max-w-full${
                isValid ? "" : " border-red-500"
              }`}
              required
              aria-label="Email"
            />
          </div>
          <div className="flex flex-col mt-6 max-md:max-w-full">
            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
              <label htmlFor="password" className="text-black">
                Password
              </label>
              <a href="#" className="text-center text-black underline">
                Forgot your password?
              </a>
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validateForm();
              }}
              className={`shrink-0 mt-2 h-12 bg-white border border-black border-solid max-md:max-w-full${
                isValid ? "" : " border-red-500"
              }`}
              required
              aria-label="Password"
            />
          </div>
          <div className="flex flex-col mt-6 max-md:max-w-full">
            <button
              type="submit"
              className={`justify-center items-center px-6 py-3 text-white bg-black border border-black border-solid max-md:px-5 max-md:max-w-full${
                isValid ? "" : " opacity-50 cursor-not-allowed"
              }`}
              onClick={() => loginWithRedirect()}
              disabled={!isValid}
            >
              Sign in
            </button>
          </div>
          <div className="flex gap-1.5 self-center mt-6 text-center text-black">
            <span>Don't have an account?</span>
            <button type="button" onClick={onSignUp} className="underline">
              Sign Up
            </button>
          </div>
        </form>
      );
    };

    
    const Login: React.FC = () => {
      const handleSubmit = (email: string, password: string) => {
        // Handle form submission
        console.log("Email:", email);
        console.log("Password:", password);
      };
    
      const handleSignUp = () => {
        // Handle sign-up
        console.log("Sign up clicked");
      };
    
      return (
        <div className="bg-white min-h-screen">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <header className="flex flex-col grow self-stretch px-16 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col justify-center items-start py-6 max-md:pr-5 max-md:max-w-full">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0926f4697db99064d98f6e299d50d9d09af873b3afdb89ccdd409f914fd0de8?apiKey=fca534dbb5ae4c60a5c6b0192f165ccb&" alt="Logo" className="aspect-[2.33] w-[63px]" />
                </div>
                <div className="flex flex-col justify-center py-20 max-md:max-w-full">
                  <div className="flex flex-col mt-11 text-center max-md:mt-10 max-md:max-w-full">
                    <h1 className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                      Sign in
                    </h1>
                    <p className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
                      Access your account and manage your ebooks
                    </p>
                  </div>
                  <LogInForm onSubmit={handleSubmit} onSignUp={handleSignUp} />
                </div>
              </header>
              <footer className="justify-center py-7 text-sm leading-5 text-center text-black max-md:max-w-full">
                © 2022 BiblioTrack
              </footer>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dca0392edf055d11520353955ab51b31d7a5e167883817844573dca97e279aa?apiKey=fca534dbb5ae4c60a5c6b0192f165ccb&" alt="Decorative" className="grow self-stretch w-full aspect-[0.8] max-md:max-w-full" />
            </div>
          </div>
        </div>
      );
    };
    
    export default Login;
