export interface IProducts {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

import type { Dispatch, SetStateAction } from "react";

export interface IProductsContext {
  planList: IProducts[];
  setPlanList: Dispatch<SetStateAction<IProducts[]>>;
  savedList: IProducts[];
  setSavedList: Dispatch<SetStateAction<IProducts[]>>;
}
