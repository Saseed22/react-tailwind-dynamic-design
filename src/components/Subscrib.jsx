import React from "react";

const Subscrib = () => {
  return (
    <div className="w-full mx-auto text-center text-white px-4 py-16 bg-black">
      <h1 className="my-2">Join our Defi Community</h1>
      <div>
        <input
          className="p-2 rounded-xl mr-4"
          placeholder="Enter your email"
          type="text"
        />
        <button>Sign Up</button>
      </div>
      <div className="flex justify-center items-center mt-4 gap-4">
        <input type="checkbox" />
        <p>Yes, I agree the terms</p>
      </div>
    </div>
  );
};

export default Subscrib;
