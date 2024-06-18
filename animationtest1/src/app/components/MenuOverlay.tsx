
import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

const MenuOverlay = ({ links }: { links: any[] }) => {
    return (
        <ul className='flex flex-col py-4 items-center'>
            <li>
            { links.map((link) => (
                <NavLink key={link.id} href={link.href} title={link.title} />
            ))
            }
            </li>
        </ul>
    );
};


export default MenuOverlay;