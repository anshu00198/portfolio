import React from 'react';

const DownloadResumeBtn = () => {
  return (
    <a
      href="/resume.pdf" // Update this path to your resume file location
      download
      className="inline-block px-6 py-3 text-white bg-accent border border-transparent rounded-lg hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-accent-light focus:ring-opacity-50 transition duration-300"
    >
      Download Resume
    </a>
  );
};

export default DownloadResumeBtn;
