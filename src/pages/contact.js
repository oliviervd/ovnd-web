import React from "react";
import Navbar from "../components/navbar/navbar";
import ContactForm from "../components/forms/contactForm";

const contact = () => {
    return (
        <html>
        <head>
            <title>contact page</title>
        </head>
        <body>
        <div className={"ScContainer"}>
            <Navbar/>
            <ContactForm/>
        </div>
        </body>
        </html>
    )
}

export default contact