import { useProductContext } from '@/context/ProductContext';
import Link from 'next/link';
import React from 'react';

const NavbarButtons = () => {
    const{planList,savedList} = useProductContext()
    return (
       
            <div className='flex items-center gap-3' >
                <Link className='btn ' href ={"/myplan"}>
                {" "}
                <button >Plan</button>{" "}
                <span className='bg-[#b8eb01]'>({planList.length})</span>
                </Link>
                <Link className='btn' href ={"/myplan"}>
                {" "}
                <button>Saved({savedList.length})</button>{" "}
                </Link>
                
               
              </div>
            
       
    );
};

export default NavbarButtons;