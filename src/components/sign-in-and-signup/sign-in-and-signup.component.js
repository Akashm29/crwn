import React from "react";
import SignIn from "../signIn/signIn.component";
import SignUp from "../sign-up/sign-up.component";
import "./sign-in-and-signup.styles.scss";

const signInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-signup">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default signInAndSignUpPage;
