/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileUpload, FaFolder, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-600 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#">
              CielUX
            </a>
            <div className="nav-links">
                <Link to="/add-file" className="text-white hover:text-white mr-4"><FaFileUpload /> Add File</Link>
                <Link to="/add-folder" className="text-white hover:text-white mr-4"><FaFolder /> Add Folder</Link>
                <Link to="/logout" className="text-white hover:text-white mr-4 "><FaSignOutAlt /> Logout</Link>
            </div>
            </div>
            </div>
        </nav>
    );
}

export default Navbar;
