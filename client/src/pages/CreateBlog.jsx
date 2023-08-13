import React from "react";

const CreateBlog = () => {
  return (
    <div className="min-h-screen w-[90vw] mx-auto bg-gray-100 mt-10 rounded-lg opacity-50 shadow-2xl">
      <h1 className="text-center font-bold text-3xl p-4">Create Blog</h1>
      <div>
        <form className="flex flex-col w-full md:w-[60%] px-4 mx-auto mt-20">
          <label htmlFor="title" className="font-bold mb-2 text-xl">
            Title :
          </label>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Your title for the blog"
            className="border border-solid border-gray-600 rounded-lg px-3 py-4 font-semibold outline-none"
          />
          <label htmlFor="text" className="mt-14 font-bold text-xl mb-2">
            Content :
          </label>
          <textarea
            placeholder="Your content here"
            className="border-gray-600 outline-none border border-solid px-3 py-4 rounded-lg font-bold mb-4"
            rows={10}
          />
          <button type="submit" className="bg-[#a76161] py-2 mt-4 w-[70%] md:w-[30%] mx-auto rounded-lg shadow-xl font-mono font-bold text-white ease-in-out duration-150 hover:bg-[#e95050]">Post Blog</button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
