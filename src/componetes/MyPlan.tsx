

"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { useProductContext } from "@/context/ProductContext";
import { Plane } from "lucide-react";


const MyPlan = () => {
  const   { planList,
    setPlanList,
    savedList,
    setSavedList} = useProductContext()
 

  const [activeTab, setActiveTab] = useState<"Today’s Plan" | "Saved">("Today’s Plan");
 
  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Name" | "Rating">("Duration");
  console.log(sortBy)
  const[orderedid, setorderedid]= useState<number[]>([])
  const currentList = activeTab === "Today’s Plan"?  planList :savedList;
  const sortedList =[...currentList].sort((a,b)=>{
    if(sortBy === "Duration")return a.duration -b.duration;
    if(sortBy ==="Calories") return a.caloriesBurned-b.caloriesBurned
    if(sortBy === "Name")return a.name.localeCompare(b.name);
  
    if(sortBy === "Rating")return a.rating -b.rating;
    return 0;
  });
  const totalProduct = currentList.length;
  const totalDuration = currentList.reduce(
    (sum,item)=>sum+ item.duration,0,
  )
   const totalCalories = currentList.reduce((sum ,item)=> sum + item.caloriesBurned,0)
  const  renderTabContent =()=>{
    if(sortedList.length === 0){
      return(<>
      <h2>nothing here</h2> </>
      )
    }
    return(
    <div>
      {sortedList.map((item) => (
      
    <h2 key = {item.id}>hello</h2>
      
      ))}
    </div>
    )
  }

  return (
    // <main className="min-h-screen bg-[#0e0f12] px-5 py-8 text-white md:px-8">

    //   <div className="mt-6 grid grid-cols-1 gap-3 rounded-xl border border-gray-800 bg-[#15181e] p-4 sm:grid-cols-3">

    //     <div className="border-b border-gray-800 pb-3 sm:border-b-0 sm:border-r sm:pb-0">
    //       <p className="text-xs text-gray-400">Exercises</p>
    //       <p className="mt-1 text-2xl font-bold text-[#C2F800]">0</p>
    //     </div>

    //     <div className="border-b border-gray-800 pb-3 sm:border-b-0 sm:border-r sm:pl-5 sm:pb-0">
    //       <p className="text-xs text-gray-400">Minutes</p>
    //       <p className="mt-1 text-2xl font-bold">0</p>
    //     </div>

    //     <div className="sm:pl-5">
    //       <p className="text-xs text-gray-400">Calories</p>
    //       <p className="mt-1 text-2xl font-bold">0</p>
    //     </div>
    //   </div>

      
    //   <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

    //     <div className="flex rounded-lg border border-gray-800 bg-[#15181e] p-1">
    //       {(["Today’s Plan", "Saved"] as const).map((tab) => (
    //         <button
    //           key={tab}
    //           type="button"
    //           onClick={() => setActiveTab(tab)}
    //           className={`rounded-md px-4 py-2 text-xs transition ${
    //             activeTab === tab
    //               ? "bg-[#252932] font-semibold text-white"
    //               : "text-gray-400 hover:text-white"
    //           }`}
    //           onChange={()=> setActiveTab("Today’s Plan")}
    //         >
    //           {tab}
    //         </button>
    //       ))}
    //     </div>

    //     <div className="flex items-center gap-2 text-xs text-gray-400">
    //       <label htmlFor="sort">Sort By</label>

    //       <select
    //         id="sort"
    //         value={sortBy}
    //         onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
    //         className="rounded-lg border border-gray-800 bg-[#15181e] px-3 py-2 text-white outline-none focus:border-[#C2F800]"
             
    //      >
    //         <option value="Duration">Duration</option>
    //         <option value="Calories">Calories</option>
    //         <option value="Name">Name</option>
    //         <option value="Rating">Rating</option>
    //       </select>
    //     </div>
    //   </div>

 
    //   <div className="mt-5 flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-800 bg-[#101216] px-4 text-center">

    //     <h2 className="text-sm font-bold">
    //       {activeTab === "Today’s Plan"
    //         ? "NOTHING HERE YET"
    //         : "NO SAVED WORKOUTS"}
    //     </h2>

    //     <p className="mt-2 max-w-sm text-xs text-gray-500">
    //       {activeTab === "Today’s Plan"
    //         ? "Browse the library and add a fit to get today moving."
    //         : "Save your favourite workouts to find them here later."}
    //     </p>

       
    //   </div>

    // </main>
    <div className="container flex flex-col mx-auto gap-2">
      <div className="stats shadow ">
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Exercies</div>
    <div className="stat-value">{totalProduct}</div>

  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Minutes</div>
    <div className="stat-value">{totalDuration}</div>
   
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
        ></path>
      </svg>
    </div>
    <div className="stat-title">Calories</div>
    <div className="stat-value">{totalCalories}</div>
    
  </div>
</div>  
{/* name of each tab group should be unique */}
<div className="tabs tabs-border">
  <input type="radio" name="my_tabs_2" className="tab" aria-label="Today’s Plan"
   checked={activeTab==="Today’s Plan"} 
   onChange={()=> setActiveTab("Today’s Plan")}
   />

  <div className="tab-content border-base-300 bg-base-100 p-10">{renderTabContent()}

  </div>

  <input type="radio" name="my_tabs_2" className="tab" aria-label="Saved" defaultChecked />
  <div className="tab-content border-base-300 bg-base-100 p-10" 
   onChange={()=> setActiveTab("Saved")}>{renderTabContent()}</div>

       <div className="flex items-center gap-2 text-xs text-gray-400 select ms-auto">
        <label htmlFor="sort">Sort By</label>

          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="rounded-lg border border-gray-800 bg-[#15181e] px-3 py-2 ms-auto  text-white outline-none focus:border-[#C2F800]"
             
         >
            <option value="Duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Name">Name</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div> 




    </div>
  );
};

export default MyPlan;
