// import { Link }  from "react-router-dom"
import React from "react";
const FatchCard = ({ iphone }) => {
  console.log(iphone);

  return (
    <div>
      <div className="card w-96 border-black ">
        <figure className="px-10 pt-10 text-left">
          <img src={iphone.image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{iphone.brand}</h2>
          <details>
          <p className="font-bold">Apple ipsum dolor, sit amet consectetur adipisicing elit. Ea vitae tempore cupiditate quidem tenetur animi.
          </p>
          </details>
          <h2 className="card-title">{iphone.phone_name}</h2>
          <div className="card-actions">
            
              <button className="btn btn-primary">ADD To Card</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FatchCard;
