export const instant = false
import AllProducts from "@/componetes/AllProducts";
import Banner from "@/componetes/Banner";
import { AllGymProducts } from "@/library/api";
import { IProducts } from "@/types/types-pro";
import Image from "next/image";

export default async function  Home() {
  const products : IProducts[]= await AllGymProducts()
  // const products: IProducts[]= data.data;
  // console.log(data)


  return (
    <div >
      <Banner />
      <AllProducts  products = {products}/>
    </div>
  );
}
