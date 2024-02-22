import React from "react";

const ContactForm = () => {
  return (
    <div className="mt-10">
      <div className="card w-full bg-[#aee9a6]">
        <form className="card-body">
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Number</span>
              </label>
              <input
                type="number"
                placeholder="Number"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Mobile Number</span>
              </label>
              <input
                type="number"
                placeholder="Mobile Number"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control font-bold">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Description"
              className="textarea textarea-bordered"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
