import { IProducts } from '@/types/types-pro';
import Image from 'next/image';
import React from 'react';



const GymCard = ({product} : {product : IProducts}) => {
    return (
        <div>
               <div className="relative h-52 w-full">
                <Image 
                 src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          />
     

        <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-semibold text-gray-800 shadow">
          ⭐ {product.rating}
        </span>
      </div>

      {/* Card Content */}
      <div className="space-y-4 p-5">
        <div>
          <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
            {product.difficulty}
          </span>

          <h2 className="mt-3 text-xl font-bold text-gray-900">
            {product.name}
          </h2>

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
            {product.description}
          </p>
        </div>

        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {product.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-700"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Exercise Information */}
        <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3">
          <div>
            <p className="text-xs text-gray-500">Duration</p>
            <p className="mt-1 font-semibold text-gray-900">
              {product.duration} min
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Calories</p>
            <p className="mt-1 font-semibold text-gray-900">
              {product.caloriesBurned} kcal
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Sets</p>
            <p className="mt-1 font-semibold text-gray-900">
              {product.sets}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Reps</p>
            <p className="mt-1 font-semibold text-gray-900">
              {product.reps}
            </p>
          </div>
        </div>

        {/* Equipment */}
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">
            Equipment:
          </span>{" "}
          {product.equipment}
        </p>

        <button
          type="button"
          className="w-full rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
        >
          View Details →
        </button>
      </div>
        </div>
    );
};

export default GymCard;