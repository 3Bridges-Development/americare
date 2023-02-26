import React, { useState, useEffect } from "react";

const query = `
query {
  faqsCollection{
    items {
      faqTitle,
      q1,
      q2,
      q3,
      a1,
      a2,
      a3,
      faqImage {
        url,
        title,
        description,
        fileName
      }
    }
  }
}
`;
const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

function FAQ() {
  let [faq, setFaq] = useState("");

  useEffect(() => {
    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}?`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${REACT_APP_CDA_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then((json) => setFaq(json.data));
  }, []);
  if (!faq) return <span>Loading...</span>;

  return (
    <>
      <div className="fact-container my-4">
        <div className="flex justify-evenly max-md:flex-col-reverse items-center">
          <div className="image-wrapper">
            <img
              src={faq.faqsCollection.items[0].faqImage.url}
              alt={faq.faqsCollection.items[0].faqImage.description}
              className="rounded"
            />
          </div>
          <div className="fact-wrapper">
            <h2 className="text-2xl text-center font-bold">
              {faq.faqsCollection.items[0].faqTitle}
            </h2>
            <div className="fact m-3">
              <h3 className="text-lg font-bold">
                {faq.faqsCollection.items[0].q1}
              </h3>
              <p className="text-base">{faq.faqsCollection.items[0].a1}</p>
            </div>
            <div className="fact m-3">
              <h3 className="text-lg font-bold">
                {faq.faqsCollection.items[0].q2}
              </h3>
              <p className="text-base">{faq.faqsCollection.items[0].a2}</p>
            </div>
            <div className="fact m-3">
              <h3 className="text-lg font-bold">
                {faq.faqsCollection.items[0].q3}
              </h3>
              <p className="text-base">{faq.faqsCollection.items[0].q3}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
