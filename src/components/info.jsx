import React from "react";

function BodyInfo() {
  return (
    <>
      <div className="body-container flex justify-evenly items-center mt-5">
        <div className="mission-wrapper">
          <h2 className="text-2xl text-center font-bold">Mission</h2>
          <p>Lorem ipsum dolor sit amet.</p>
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
