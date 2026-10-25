import { IProducts } from '@/types/types-pro';
import React from 'react';
import GymCard from './GymCard';

const AllProducts = ({products}: {products :IProducts[] }) => {
    return (
        <div className='container mx-auto'>
            <h2>THE LIBRARY</h2>
            <p>Twelve lifts covering every major muscle group</p>
            <div>
          {products?.map((product) => (
          <GymCard key={product.id} product={product} />
        ))}
            </div>
        </div>
        
    );
};

export default AllProducts;