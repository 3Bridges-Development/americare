import React from "react";

function BodyInfo() {
  return (
    <>
      <div className="body-container flex justify-evenly max-md:flex-col items-center mt-5">
        <div className="mission-wrapper">
          <h2 className="text-2xl text-center font-bold">Mission</h2>
          <p className="text-base m-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium nesciunt aliquam quisquam ducimus velit blanditiis
            eveniet accusamus nostrum! Dolores non assumenda modi a, doloribus
            nihil porro possimus. Assumenda placeat porro minima dignissimos
            quisquam quia, enim corrupti saepe magni autem ut dolores corporis
            perferendis architecto, explicabo recusandae vel reiciendis. Et,
            non.
          </p>
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
