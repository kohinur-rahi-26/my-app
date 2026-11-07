
"use client";
export const instant = false
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const NavLinks = ({href,children} :{
    href :string,
    children : ReactNode,
}) => {
 const pathName = usePathname();
 const isActive = href==="/" ? pathName ==="/" : pathName.startsWith(href);
    return (
        <Link href = {href}
        className ={`${isActive ? "text-primary" : ''} font-medium`}
        
        >
            {children}
        </Link>
    );
};

export default NavLinks;