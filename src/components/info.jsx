import React, { useState, useEffect } from "react";

const query = `
query {
  mission(id: "56SMlz81KtgvWHdmU4fnKz") {
    description
  }
}`

const {REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN} = process.env

function BodyInfo() {
  let [description, setDescription] = useState("")

  useEffect(() => {
    window.fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}?`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`
      },
      body: JSON.stringify({ query }),
    }).then(response => response.json())
    .then(json => setDescription(json.data))
  }, [])

  if(!description) return <span>Loading...</span>

  return (
    <>
      <div className="body-container flex justify-evenly max-md:flex-col items-center mt-5">
        <div className="mission-wrapper">
          <h2 className="text-2xl text-center font-bold">Mission</h2>
          <p>{description.mission.description}</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="img-wrapper">
          <img
            src="https://picsum.photos/300/300"
            alt="#"
            className="rounded"
          />
        </div>
      </div>
    </>
  );
}

export default BodyInfo;
