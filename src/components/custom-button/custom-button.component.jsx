import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, isATB, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? "google-sign-in" : "" } ${isATB ? "atb" : "" } custom-button`} {...otherProps} >
        {children}
    </button>
);

export default CustomButton;