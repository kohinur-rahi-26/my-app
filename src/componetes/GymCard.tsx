

import { IProducts } from '@/types/types-pro';
import Image from 'next/image';
import Link from 'next/link';

const GymCard = ({ product }: { product: IProducts }) => {
  return (
    <Link
      href={`/products/${product.id}`}
      className="block w-full max-w-[390px] overflow-hidden rounded-2xl border border-gray-800 bg-[#15171c] text-white shadow-md transition hover:border-[#C2F800]"
    >
     
      <div className="relative h-[200px] w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

    
      <div className="flex flex-col gap-4 p-5">
        <div>
         
          <div className="mt-4 flex flex-wrap gap-2">
            {product.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-2.5 py-1 text-xs font-semibold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="mt-3 text-xl font-bold text-white">
            {product.name}
          </h2>

          <p className="text-sm text-gray-400">
            {product.equipment}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 rounded-xl border-t border-gray-800 bg-[#1d2026] p-2">
          <p className="mt-1 text-sm font-semibold text-gray-400">
            {product.duration} min
          </p>

          <p className="mt-1 text-sm font-semibold text-gray-400">
            {product.caloriesBurned} kcal
          </p>

          <span className="mt-[5px] text-sm text-gray-400">
            ⭐ {product.rating}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GymCard;

