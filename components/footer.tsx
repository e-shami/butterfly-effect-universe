import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center px-1 bg-teal-300 w-full bg-pink">
      <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center">
        <div className="flex lg:flex-col w-3/4 justify-center items-start lg:items-start mt-4">
          <Image
            src="/assets/images/logo.svg"
            alt="Butterfly Effect Logo"
            width={200}
            height={200}
            className="object-contain"
          />
          <p className="text-white font-regular font-inter md:text-md lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed .
          </p>
        </div>

        {/* second column in lg screens */}
        <div className="flex justify-between items-center w-8/12 lg:w-3/4 mt-2">
          <div>
            <Link
              href="#"
              className="text-white font-bold font-inter md:text-xl lg:text-2xl"
            >
              About Us
            </Link>

            <div className="flex flex-col mt-2 lg:mt-6 space-y-2">
              <Link
                href="#"
                className="text-white font-medium font-inter md:text-md lg:text-xl"
              >
                Vision
              </Link>
              <Link
                href="#"
                className="text-white font-medium font-inter md:text-md lg:text-xl"
              >
                Mission
              </Link>
              <Link
                href="#"
                className="text-white font-medium font-inter md:text-md lg:text-xl"
              >
                Members
              </Link>
            </div>
          </div>

          <div>
            <Link
              href="#"
              className="text-white font-bold font-inter md:text-xl lg:text-2xl"
            >
              Contact Us
            </Link>

            <div className="flex flex-col mt-2 lg:mt-6 space-y-2">
              <Link
                href="#"
                className="text-white font-medium font-inter md:text-md lg:text-xl"
              >
                Phone
              </Link>
              <Link
                href="#"
                className="text-white font-medium font-inter md:text-md lg:text-xl"
              >
                Email
              </Link>
              <Link
                href="#"
                className="text-white font-medium font-inter md:text-md lg:text-xl"
              >
                Message
              </Link>
            </div>
          </div>
        </div>

        {/* 3rd column for lg screens */}

        <div className="flex flex-col w-3/4 mt-4 justify-center items-center">
          <h3 className="text-white font-Medium font-inter md:text-md lg:text-xl">
            Visit Our Social Media Pages
          </h3>

          <div className="flex justify-between items-center mt-4 w-3/4 space-x-6">
            <button>
              <img
                src="/assets/icons/linkedin.svg"
                alt="linkedin icon svg"
                className="w-10 h-10"
              />
            </button>

            <button>
              <img
                src="/assets/icons/instagram.svg"
                alt="linkedin icon svg"
                className="w-12 h-12"
              />
            </button>

            <button>
              <img
                src="/assets/icons/facebook.svg"
                alt="linkedin icon svg"
                className="w-10 h-10 rounded-md"
              />
            </button>

            <button>
              <img
                src="/assets/icons/twitter-X.svg"
                alt="twitter new icon svg"
                className="w-10 h-10"
              />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-11/12 lg:mt-4 justify-center">
        <hr className="w-full text-white my-4 " />

        <p className="text-white font-regular font-inter md:text-md lg:text-xl mx-4 mb-4 text-center">
          © Copyright reserved for Butterfly Effect @2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
