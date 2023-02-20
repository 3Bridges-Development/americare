import React, { useState, useEffect } from "react";


const query = `
query {
  missionCollection {
    items {
      description
      secondDescription
      thirdDescription
    }
  }
}
`
const {REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN} = process.env



function FAQ() {
    let [faq, setFaq] = useState("")
    
      useEffect(() => {
        window.fetch(`https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}?`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`
          },
          body: JSON.stringify({ query }),
        }).then(response => response.json())
        .then(json => setFaq(json.data))
      }, [])
    if(!faq) return <span>Loading...</span>
    
  return (
    <>
      <div className="fact-container mt-4">
        <div className="flex justify-evenly max-md:flex-col-reverse items-center">
          <div className="image-wrapper">
            <img
              src="https://picsum.photos/300/300"
              alt="#"
              className="rounded"
            />
          </div>
          <div className="fact-wrapper">
            <h2 className="text-2xl text-center font-bold">Facts/FAQ's</h2>
            <div className="fact m-3">
              <h3 className="text-lg font-bold">{faq.missionCollection.items[0].description}</h3>
              <p>{faq.missionCollection.items[1].description}</p>
            </div>
            <div className="fact m-3">
              <h3 className="text-lg font-bold">{faq.missionCollection.items[0].secondDescription}</h3>
              <p>{faq.missionCollection.items[1].secondDescription}</p>
            </div>
            <div className="fact m-3">
              <h3 className="text-lg font-bold">{faq.missionCollection.items[0].thirdDescription}</h3>
              <p>{faq.missionCollection.items[1].thirdDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
