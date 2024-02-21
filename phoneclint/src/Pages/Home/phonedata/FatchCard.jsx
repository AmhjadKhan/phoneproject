// import { Link }  from "react-router-dom"
import React from "react";
const FatchCard = ({ iphone }) => {
  // console.log(iphone);

  return (
    <div>
      <div className="card w-96 border-black ">
        <figure className="px-10 pt-10 text-left">
          <img src={iphone.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{iphone.brand}</h2>
          <details>
            <p className="font-bold">
              Apple ipsum dolor, sit amet consectetur adipisicing elit. Ea vitae
              tempore cupiditate quidem tenetur animi.
            </p>
          </details>
          <h2 className="card-title">{iphone.phone_name}</h2>
          <div className="card-actions">
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn bg-[#ee4545]"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              ADD TO CARD
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-4xl">💕THANK YOU ❤</h3>
                <p className="py-4 text-xl">
                 Please Log in 
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FatchCard;
