import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "./styles/main.scss";

function App() {
  const [isSignInPage, setIsSignPage] = useState(false);

  const toggleSignInPage = () => {
    setIsSignPage(!isSignInPage);
  };

  return (
    <div>
      {isSignInPage ? (
        <SignUp onClick={toggleSignInPage} />
      ) : (
        <SignIn onClick={toggleSignInPage} />
      )}
    </div>
  );
}

export default App;
