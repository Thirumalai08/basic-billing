import React from "react";
import "./scss/header.scss";

function Header({ header = "Header", title = "Nambi" }) {
    const handleHeader = () => {
        console.log("Method Called !!!!");
    };
    return (
        <>
            <h1 onClick={handleHeader}>{header}</h1>
            <p>{title}</p>
        </>
    );
}

export default Header;
