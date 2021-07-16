import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, isGoogleSignIn, isATB, inverted, ...otherProps}) => (
    <button className={`${inverted ? "inverted" : "" } ${isGoogleSignIn ? "google-sign-in" : "" } ${isATB ? "atb" : "" } custom-button`} {...otherProps} >
        {children}
    </button>
);

export default CustomButton;