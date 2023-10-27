import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 shadow bg-sky-50">
      <nav className="flex items-center space-x-6 md:space-x-10">
        <Image
          src="/assets/images/logo.svg"
          alt="Butterfly Effect Logo"
          width={120}
          height={120}
          className="object-contain ml-2 md:ml-16"
        />

        {/* Hamburger menu for small screens */}
        <div className="md:hidden">
          <button>
            <svg
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 text-teal-800"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="2"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M5.5 11.75C5.08579 11.75 4.75 12.0858 4.75 12.5C4.75 12.9142 5.08579 13.25 5.5 13.25V11.75ZM19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75V13.25ZM7.834 15.75C7.41979 15.75 7.084 16.0858 7.084 16.5C7.084 16.9142 7.41979 17.25 7.834 17.25V15.75ZM17.167 17.25C17.5812 17.25 17.917 16.9142 17.917 16.5C17.917 16.0858 17.5812 15.75 17.167 15.75V17.25ZM7.834 7.75C7.41979 7.75 7.084 8.08579 7.084 8.5C7.084 8.91421 7.41979 9.25 7.834 9.25V7.75ZM17.167 9.25C17.5812 9.25 17.917 8.91421 17.917 8.5C17.917 8.08579 17.5812 7.75 17.167 7.75V9.25ZM5.5 13.25H19.5V11.75H5.5V13.25ZM7.834 17.25H17.167V15.75H7.834V17.25ZM7.834 9.25H17.167V7.75H7.834V9.25Z"
                  fill="none"
                  stroke="currentColor"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>

        {/* Navigation links for larger screens */}
        <div className="hidden md:flex md:flex-row items-center text-base font-semibold text-xl text-sky-900">
          <ul className="flex space-x-10">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* "Invest Today" button */}
      <div className="flex justify-between px-4 items-center border border-2 border-teal-500 p-2 md:w-40 rounded-lg text-teal-500 group hover:bg-teal-500 hover:text-white ">
  <Link href="/donate" className="font-medium">
    Invest Today
  </Link>

  <div className="group-hover:text-white">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#000000"
      className="w-6 h-6"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M8 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V16"
          stroke="#00c79f"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M10 6L18 6"
          stroke="#00c79f"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M6 6H7"
          stroke="#00c79f"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
        <path
          d="M3.5 20.5L12 12M12 12V16M12 12H8"
          stroke="#00c79f"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>{" "}
      </g>
    </svg>
  </div>
</div>

    </div>
  );
};

export default Navbar;
