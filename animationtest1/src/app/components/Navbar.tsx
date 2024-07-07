"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import MenuOverlay from './MenuOverlay';
import { Bars3Icon, XMarkIcon} from '@heroicons/react/20/solid';


const navLinks = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'About',
        href: '#about'
    },
    {
        title: 'Projects',
        href: '#projects'
    },
    {
        title: 'Contact',
        href: '#contact'
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
            <div className="flex flex-wrap items-center justify-center mx-auto px-4 py-2"> {/* Change justify-between to justify-center */}
                <div className="mobile-menu block md:hidden"> 
                    {/* Mobile Hamburger logic */}
                    {
                        !navbarOpen ? (
                            <button onClick= {() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded hover:border-grey">
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded hover:border-grey">
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 justify-center">
                        {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.href} title={link.title} />
                            </li>
                        ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null }
        </nav>
    )
}

export default Navbar;
