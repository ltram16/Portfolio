import React from 'react';

const Projects = () => {
  // Sample project data
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      imageUrl: '/path/to/project1-image.jpg',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      imageUrl: '/path/to/project2-image.jpg',
    },
    {
        title: 'Project 3',
        description: 'Description of Project 3',
        imageUrl: '/path/to/project3-image.jpg',
      },
    // Add more project entries
  ];

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
        {/* Other main content */}
      </div>
    </div>
  );
};

export default Projects;
