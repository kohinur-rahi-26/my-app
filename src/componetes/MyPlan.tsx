

"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { useProductContext } from "@/context/ProductContext";


const MyPlan = () => {
  const   { planList,
    setPlanList,
    savedList,
    setSavedList} = useProductContext()
 

  const [activeTab, setActiveTab] = useState<"Today’s Plan" | "Saved">("Today’s Plan");
  const [sortBy, setSortBy] = useState<"Duration" | "Calories" | "Name" | "Rating">("Duration");
  const[orderedid, setorderedid]= useState<number[]>([])

  return (
    <main className="min-h-screen bg-[#0e0f12] px-5 py-8 text-white md:px-8">

      <div className="mt-6 grid grid-cols-1 gap-3 rounded-xl border border-gray-800 bg-[#15181e] p-4 sm:grid-cols-3">

        <div className="border-b border-gray-800 pb-3 sm:border-b-0 sm:border-r sm:pb-0">
          <p className="text-xs text-gray-400">Exercises</p>
          <p className="mt-1 text-2xl font-bold text-[#C2F800]">0</p>
        </div>

        <div className="border-b border-gray-800 pb-3 sm:border-b-0 sm:border-r sm:pl-5 sm:pb-0">
          <p className="text-xs text-gray-400">Minutes</p>
          <p className="mt-1 text-2xl font-bold">0</p>
        </div>

        <div className="sm:pl-5">
          <p className="text-xs text-gray-400">Calories</p>
          <p className="mt-1 text-2xl font-bold">0</p>
        </div>
      </div>

      
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

        <div className="flex rounded-lg border border-gray-800 bg-[#15181e] p-1">
          {(["Today’s Plan", "Saved"] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-md px-4 py-2 text-xs transition ${
                activeTab === tab
                  ? "bg-[#252932] font-semibold text-white"
                  : "text-gray-400 hover:text-white"
              }`}
              onChange={()=> setActiveTab("Today’s Plan")}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <label htmlFor="sort">Sort By</label>

          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="rounded-lg border border-gray-800 bg-[#15181e] px-3 py-2 text-white outline-none focus:border-[#C2F800]"
             
         >
            <option value="Duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Name">Name</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
      </div>

 
      <div className="mt-5 flex min-h-[220px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-800 bg-[#101216] px-4 text-center">

        <h2 className="text-sm font-bold">
          {activeTab === "Today’s Plan"
            ? "NOTHING HERE YET"
            : "NO SAVED WORKOUTS"}
        </h2>

        <p className="mt-2 max-w-sm text-xs text-gray-500">
          {activeTab === "Today’s Plan"
            ? "Browse the library and add a fit to get today moving."
            : "Save your favourite workouts to find them here later."}
        </p>

        <Link
          href="/workouts"
          className="mt-5 rounded-full bg-[#C2F800] px-5 py-2.5 text-xs font-bold text-black transition hover:bg-lime-400"
        >
          Go to workouts
        </Link>
      </div>

    </main>
  );
};

export default MyPlan;
