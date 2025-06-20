import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-primary to-primary-light bg-primary-light text-white p-6 absolute bottom-0 w-full">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
        <p className="font-bold text-lg">
          Issued in Public Interest by Election Commission of India
        </p>
        <p className="mt-2 text-sm">
          Developer - <strong>ABHISHEK SINGH</strong>, Vellore Institute of Technology, Chennai
        </p>
      </div>
    </footer>
  );
};

export default Footer;
