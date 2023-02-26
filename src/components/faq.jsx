import React from "react";

function FAQ() {
  return (
    <>
      <div className="fact-container my-4">
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
              <h3 className="text-lg font-bold">Lorem, ipsum?</h3>
              <p className="text-base">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="fact m-3">
              <h3 className="text-lg font-bold">Lorem, ipsum?</h3>
              <p className="text-base">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="fact m-3">
              <h3 className="text-lg font-bold">Lorem, ipsum?</h3>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique quisquam ex in veniam quo impedit molestiae
                perferendis nemo aspernatur. Obcaecati inventore soluta
                temporibus, quasi, iste incidunt consequatur hic fugit quas
                eveniet ipsa, praesentium animi itaque distinctio! Et tempora
                veritatis asperiores soluta numquam voluptatem, maiores ut
                doloremque consectetur molestiae necessitatibus? Vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;
