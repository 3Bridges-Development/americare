import React, { useState, useEffect } from "react";

const query = `
query {
footerCollection {
    items {
      email,
      phoneNumber
    }
  }
}
`

const {REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN} = process.env


function Footer() {
  let [footer, setFooter] = useState("")

  useEffect(() => {
    window.fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}?`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`
      },
      body: JSON.stringify({ query }),
    }).then(response => response.json())
    .then(json => setFooter(json.data))
  }, [])

  return (
    <div className="footer-container text-center bg-red-200 mt-5">
      <div className="text-lg font-bold">
        Americare &copy; Copyright {new Date().getFullYear()}
      </div>
      <div className="contact">
        <span>Email: {footer ? footer.footerCollection.items[0].email : ""}</span>
        <br />
        <span>Phone: {footer ? footer.footerCollection.items[0].phoneNumber : ""}</span>
      </div>
      <a href="/" className="contact-form">
        Contact Us
      </a>
    </div>
  );
}

export default Footer;
