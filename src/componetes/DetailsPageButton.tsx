"use client"
import { useProductContext } from '@/context/ProductContext';
import { IProducts } from '@/types/types-pro';
import React, { use } from 'react';
import toast from 'react-hot-toast';

const DetailsPageButton = ({product}:{product :IProducts}) => {
        const   { planList,
           setPlanList,
           savedList,
           setSavedList} = useProductContext()
        const isPlanFull = planList.length >= 5;
        const alreadyInPlan = planList.some((item) => item.id === product.id)
        const alreadyInSaved = savedList.some((item) => item.id === product.id)

        const handleAddToPlan = ()=>{
            if(alreadyInPlan){
                toast.error("already in plan")
                return
            }
            if(isPlanFull ){
                toast.error("plan full")
                return
            }
            setPlanList((prev)=> [...prev,product])
            toast.success("add to Plan")
        }
       const handleSavedForLater = ()=>{
            if(alreadyInSaved){
                toast.error("already in wishList")
                return
            }
        setSavedList((prev)=> [...prev,product])
            toast.success("add to Saved")
        }
                
            
    return (
         <div className='flex flex-wrap gap-4' >
    <button
      type="button"
      disabled = {alreadyInPlan}
      onClick={handleAddToPlan}
      className="flex-1 rounded-lg bg-[#c2f800] px-4 py-3 text-sm font-bold text-black disabled:cursor-not-allowed disabled:pointer-events-auto"
    >
      Add to today's plan
    </button>
    <button
      type="button"
      disabled ={alreadyInSaved}
      onClick={handleSavedForLater}
      className="flex-1 rounded-lg border border-gray-700 px-4 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:pointer-events-auto"
    >
     Save for later
    </button>
  </div>
      
    )
};

export default DetailsPageButton;