import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="container mx-auto py-10">
        <div className="text-center">
          {/* <h1 className="text-3xl font-bold mb-4">Christina Le</h1> */}
          <img src="/path/to/your/profile-picture.jpg" alt="Profile" className="mx-auto rounded-full w-32 h-32 object-cover mb-4" />
          <p className="text-lg">Web Developer</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700">
            Hi!! I am a Web Developer, constantly seeking to learn and grow. I approach each project with an open mind and a keen interest in creating user-friendly and engaging web experiences. My journey in web development started in 2023, and I've been exploring and expanding my skills ever since.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gray-500 rounded-full flex-shrink-0"></div>
            <div className="ml-4">
            <p className="font-bold">Full-Stack Web Devlopment Bootcamp</p>
              <p>University of California, Irvine</p>
              <p className="text-gray-500">2022 - 2023</p>
              <br></br>
              <p className="font-bold">Bachelor's Degree in Biology</p>
              <p>University of California, Riverside</p>
              <p className="text-gray-500">2016 - 2020</p>
            </div>
          </div>
          {/* Add more education entries here */}
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
          <ul className="list-disc list-inside">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Node JS, GraphQL</li>
            <li>Responsive Design</li>
            <li>Version Control (Git)</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;
