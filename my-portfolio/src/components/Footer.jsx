import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center space-y-2">
        <p className="text-lg font-semibold">Зв'язатися зі мною:</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="hover:text-blue-400">GitHub</a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="hover:text-blue-400">LinkedIn</a>
          <a href="mailto:your.email@example.com" className="hover:text-blue-400">Email</a>
        </div>
        <p className="text-sm text-gray-400 pt-4">© {new Date().getFullYear()} Усі права захищено.</p>
      </div>
    </footer>
  );
};

export default Footer;