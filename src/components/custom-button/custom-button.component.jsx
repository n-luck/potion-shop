import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({children, ...otherProps}) => (
    <buton className="custom-button" {...otherProps} >
        {children}
    </buton>
);

export default CustomButton;