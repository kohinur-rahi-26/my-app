

"use client";

import { useState } from "react";
import Link from "next/link";
import { useProductContext } from "@/context/ProductContext";
import { Clock, Flame, Star, Dumbbell } from "lucide-react";
import toast from "react-hot-toast";


const MyPlan = () => {
  const {
    planList,
    setPlanList,
    savedList,
    setSavedList,
  } = useProductContext();

  const [activeTab, setActiveTab] = useState<"Today’s Plan" | "Saved">(
    "Today’s Plan"
  );

  const [sortBy, setSortBy] = useState<
    "Duration" | "Calories" | "Name" | "Rating"
  >("Duration");


  const currentList =
    activeTab === "Today’s Plan" ? planList : savedList;

  
  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "Duration") return a.duration - b.duration;

    if (sortBy === "Calories")
      return a.caloriesBurned - b.caloriesBurned;

    if (sortBy === "Name")
      return a.name.localeCompare(b.name);

    if (sortBy === "Rating")
      return b.rating - a.rating;

    return 0;
  });


  const totalProduct = currentList.length;

  const totalDuration = currentList.reduce(
    (sum, item) => sum + item.duration,
    0
  );

  const totalCalories = currentList.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0
  );


  const showToast = (message: string) => {
    toast.success(message, {
      duration: 2500,
      style: {
        background: "#15171c",
        color: "#ffffff",
        border: "1px solid #333842",
        borderRadius: "12px",
        padding: "14px 18px",
        fontSize: "13px",
      },
      iconTheme: {
        primary: "#C2F800",
        secondary: "#15171c",
      },
    });
  };


  const removeFromPlan = (id: number) => {
    if (activeTab === "Today’s Plan") {
      setPlanList((prev) =>
        prev.filter((product) => product.id !== id)
      );

      showToast("Workout removed from today's plan!");
    } else {
      setSavedList((prev) =>
        prev.filter((product) => product.id !== id)
      );

      showToast("Workout removed from saved!");
    }
  };

  
  const renderTabContent = () => {
    if (sortedList.length === 0) {
      return (
        <div className="flex min-h-[250px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-700 bg-[#101216] px-4 text-center">

          <Dumbbell size={35} className="mb-4 text-[#C2F800]" />

          <h2 className="text-base font-bold text-white">
            {activeTab === "Today’s Plan"
              ? "NOTHING HERE YET"
              : "NO SAVED WORKOUTS"}
          </h2>

          <p className="mt-2 max-w-sm text-sm text-gray-500">
            {activeTab === "Today’s Plan"
              ? "Browse the library and add a workout to get today moving."
              : "Save your favourite workouts to find them here later."}
          </p>

        </div>
      );
    }

    return (
      <div className="flex flex-col gap-4">

        {sortedList.map((product) => (
          <div
            key={product.id}
            className="flex w-full min-h-[112px] flex-wrap items-center gap-4 rounded-2xl border border-gray-800 bg-[#15171c] p-4 text-white transition hover:border-[#C2F800] sm:flex-nowrap"
          >

            
            <div className="h-[80px] w-[144px] shrink-0 overflow-hidden rounded-xl">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>

          
            <div className="min-w-0 flex-1">

              <h2 className="truncate text-base font-bold">
                {product.name}
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                {product.equipment}
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-400">

                <span className="flex items-center gap-1">
                  <Clock size={14} className="text-[#C2F800]" />
                  {product.duration} min
                </span>

                <span className="flex items-center gap-1">
                  <Flame size={14} className="text-[#C2F800]" />
                  {product.caloriesBurned} kcal
                </span>

                <span className="flex items-center gap-1">
                  <Star size={14} className="text-[#C2F800]" />
                  {product.rating}
                </span>

              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">

              <Link
                href={`/products/${product.id}`}
                className="rounded-full border border-gray-700 px-4 py-2 text-xs text-white transition hover:border-[#C2F800] hover:text-[#C2F800]"
              >
                View Details
              </Link>

              <button
                type="button"
                onClick={() => removeFromPlan(product.id)}
                className="rounded-full bg-[#C2F800] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#a9d900]"
              >
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#0e0f12] px-5 py-8 text-white md:px-8">

      

      
      <div className="stats stats-vertical w-full border border-gray-800 bg-[#15181e] shadow sm:stats-horizontal">

        <div className="stat">
          <div className="stat-title text-gray-400">
            Exercises
          </div>
          <div className="stat-value text-[#C2F800]">
            {totalProduct}
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-gray-400">
            Minutes
          </div>
          <div className="stat-value text-white">
            {totalDuration}
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-gray-400">
            Calories
          </div>
          <div className="stat-value text-white">
            {totalCalories}
          </div>
        </div>

      </div>

    
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">

    
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
            onChange={(e) =>
              setSortBy(e.target.value as typeof sortBy)
            }
            className="rounded-lg border border-gray-800 bg-[#15181e] px-3 py-2 text-white outline-none focus:border-[#C2F800]"
          >
            <option value="Duration">Duration</option>
            <option value="Calories">Calories</option>
            <option value="Name">Name</option>
            <option value="Rating">Rating</option>
          </select>

        </div>

      </div>

     
      <div className="mt-5">
        {renderTabContent()}
      </div>

    </main>
  );
};

export default MyPlan;
