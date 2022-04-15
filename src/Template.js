import React from "react";
import Header from "./Header";

const Template = ({children, title}) => {
    return (
        <>
            <Header header_title={title}/>
            {children}
        </>
    )
}

export default Template