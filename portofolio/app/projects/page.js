import React from 'react';

const Projects = () => {
  return (
    <div className="w-full px-[12%] py-10">
      <h1 className="text-4xl font-bold text-center">All Projects</h1>
      <p className="text-center mt-5">
        Here you can explore all my projects in detail.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Example Project Cards */}
        <div className="border border-gray-400 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold">Project 1</h3>
          <p className="text-gray-600 mt-2">
            A brief description of the project goes here.
          </p>
        </div>
        <div className="border border-gray-400 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold">Project 2</h3>
          <p className="text-gray-600 mt-2">
            Another brief description of the project goes here.
          </p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
