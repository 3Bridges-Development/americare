import React, { useState, useEffect } from "react";

const query = `
query {
	missionInfoCollection{
    items {
      missionTitle,
      missionDescription,
      missionImage {
        url,
        description,
        fileName,
        title
      }
    }
  }
}
`;

const { REACT_APP_SPACE_ID, REACT_APP_CDA_TOKEN } = process.env;

function BodyInfo() {
  let [mission, setMission] = useState("");

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
      .then((json) => setMission(json.data));
  }, []);

  if (!mission) return;

  return (
    <>
      <div className="body-container flex justify-evenly max-md:flex-col items-center mt-5">
        <div className="mission-wrapper">
          <h2 className="text-2xl text-center font-bold">
            {mission.missionInfoCollection.items[0].missionTitle}
          </h2>
          <p className="text-base m-3">
            {mission.missionInfoCollection.items[0].missionDescription}
          </p>
        </div>
        <div className="img-wrapper">
          <img
            src={mission.missionInfoCollection.items[0].missionImage.url}
            alt={
              mission.missionInfoCollection.items[0].missionImage.description
            }
            className="rounded max-w-sm w-full"
          />
        </div>
      </div>
    </>
  );
}

export default BodyInfo;
