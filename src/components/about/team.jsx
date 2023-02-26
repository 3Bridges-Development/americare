import React from "react";

function Team() {
  return (
    <>
      <h2 className="text-2xl font-bold m-4">The Team</h2>
      <div className="headshots flex justify-evenly max-md:flex-col">
        <img
          src="https://picsum.photos/300/300"
          alt="#"
          className="rounded max-w-sm w-full"
        />
        <img
          src="https://picsum.photos/300/300"
          alt="#"
          className="rounded max-w-sm w-full"
        />
      </div>
      <div className="descriptions text-left m-4">
        <h3 className="text-lg font-bold">Team Member 1</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          architecto earum ab consequatur vero numquam laborum neque tempora
          facilis voluptatibus?
        </p>
        <h3 className="text-lg font-bold">Team Member 2</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
          architecto earum ab consequatur vero numquam laborum neque tempora
          facilis voluptatibus?
        </p>
      </div>
    </>
  );
}

export default Team;
