
"use client"
import Link from "next/link";
import React from "react";
import Container from "./Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Icône email standard

export default function Footer() {
  return (
    <footer className="relative bg-gray-800 text-white py-1">
      <Container>
        <div className="grid max-w-screen-xl grid-cols-1 gap-1 border-t border-gray-700 lg:grid-cols-3 pt-3 mx-auto">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link
              href="/homepage"
              className="flex items-center space-x-3 text-2xl font-semibold text-yellow-400 hover:text-indigo-300 transition-colors"
            >
              {/* <img
                src="/img/logo.svg"
                alt="Elaco"
                width="40"
                height="40"
                className="w-10 h-10"
              /> */}
              <span>Elaco coworking Space</span>
            </Link>
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              A     modern coworking space designed to fuel productivity and innovation in a professional environment.
            </p>
          </div>

          {/* Contact Info */}
          <div className=" grid-cols-1 gap-6 text-gray-400 lg:col-span-2 lg:flex lg:space-x-2">
            {/* Address */}
            <div className="flex-1">
              <h4 className="text-white font-medium text-xl mb-4">Location</h4>
              <a className="flex items- gap-2 text-sm" href="https://www.google.com/maps/place/Elaco+Coworking+Space/@36.7079735,10.4186861,17z/data=!4m6!3m5!1s0x12fd4f0bd383f93b:0xcd2fdd53f35bf116!8m2!3d36.7079209!4d10.420212!16s%2Fg%2F11ss4xfnfj?entry=ttu&g_ep=EgoyMDI1MDMzMC4wIKXMDSoASAFQAw%3D%3D">               <span className="w-7 h-8 p-2 rounded-full bg-gray-200 shadow-md transition-colors duration-300 hover:bg-indigo-500 hover:text-white text-black" style={{ borderRadius: '50px', boxShadow: '0px 0px 0px #bebebe, 0px 0px 0px #ffffff' }}> <FontAwesomeIcon icon={faLocationDot} />
              </span>
              1er Etage, Immeuble El Bassatine, Avenue Egypte, Borj Cédria 2084</a>
            </div>
            {/* Contact Numbers */}
            <div className="flex-1">
              <h4 className="text-white font-medium text-xl mb-4">Contact</h4>
              <p className="flex items-center gap-3 text-sm"><span className="w-7 h-8 p-2 rounded-full bg-gray-200 shadow-md transition-colors duration-300 hover:bg-indigo-500 hover:text-white text-black" style={{ borderRadius: '50px', boxShadow: '0px 0px 0px #bebebe, 0px 0px 0px #ffffff' }}> <FontAwesomeIcon icon={faPhone} />


              </span> +216 98 444 080</p>
              <></>
              <p className="flex items-center gap-3 text-sm"> <span className="w-7 h-8 p-2 rounded-full bg-gray-200 shadow-md transition-colors duration-300 hover:bg-indigo-500 hover:text-white text-black" style={{ borderRadius: '50px', boxShadow: '0px 0px 0px #bebebe, 0px 0px 0px #ffffff' }}> <FontAwesomeIcon icon={faEnvelope} />
              </span> 
              elacocoworking@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-10 rounded-xl overflow-hidden border border-gray-700 shadow-lg">
          <iframe
            title="WorkZone Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.753217883383!2d10.417637115019402!3d36.7079208799647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd4f0bd383f93b%3A0xcd2fdd53f35bf116!2sElaco%20Coworking%20Space!5e0!3m2!1sfr!2stn!4v1712076973150!5m2!1sfr!2stn"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-6">
          &copy; {new Date().getFullYear()} Elacoworking Space. All rights reserved. Crafted by <span className="text-white font-semibold">MAB-CREATIONS</span>.
        </div>
      </Container>
    </footer>
  );
}

