import MyPlan from '@/componetes/MyPlan';
import React from 'react';

const page = () => {
    return (
        <div className="mb-6  container mx-auto">
  <h1 className="text-[24px] font-extrabold uppercase leading-tight text-white">
    MY PLAN
  </h1>

  <p className="mt-2 text-[12px] leading-5 text-gray-400">
    Your daily fitness plan. Stay consistent, stay strong, and track your progress.
  </p>

            <MyPlan />
        </div>
    );
};

export default page;