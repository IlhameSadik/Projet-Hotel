import React from 'react';
import { BiHotel } from 'react-icons/bi';
import { BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container mx-auto d-flex flex-column flex-md-row justify-content-between align-items-center mt-auto">
        <div className="d-flex align-items-center">
          <BiHotel size={34} className="me-2" />
          <h1 className="text-lg font-semibold">BestHotel</h1>
        </div>
        
      </div>
      <div className="container mx-auto d-flex flex-column flex-md-row justify-content-center align-items-center mt-4">
        <a href="#" className="text-white rounded-circle p-2 me-2" style={{ backgroundColor: '#1DA1F2' }}>
          <BsTwitter size={24} />
        </a>
        <a href="#" className="text-white rounded-circle p-2 me-2" style={{ backgroundColor: '#C13584' }}>
          <BsInstagram size={24} />
        </a>
        <a href="#" className="text-white rounded-circle p-2" style={{ backgroundColor: '#3B5998' }}>
          <BsFacebook size={24} />
        </a>
      </div>
      <p className="text-center mt-4">
        © {new Date().getFullYear()} <span className="text-[#c4302b]">Ilhame Sadik et Khadija Moussaoui</span> | Tous droits réservés
      </p>
    </footer>
  );
};

export default Footer;
