import { IProducts } from '@/types/types-pro';
import React from 'react';
import GymCard from './GymCard';

const AllProducts = ({products}: {products :IProducts[] }) => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-[40px]'>THE LIBRARY</h2>
            <p className='text-[20px] text-gray-400'>Twelve lifts covering every major muscle group</p>
            <div className='grid grid-cols-3 gap-5'>
          {products?.map((product) => (
          <GymCard key={product.id} product={product} />
        ))}
            </div>
        </div>
        
    );
};

export default AllProducts;