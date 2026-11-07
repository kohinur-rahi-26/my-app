
import DetailsPageButton from '@/componetes/DetailsPageButton';
import { getSingleProducts } from '@/library/api';
import Image from 'next/image';



const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const data = await getSingleProducts(id);
  const product = data?.data ?? data;

  if (!product || !product.id) {
    return (
      <main className="min-h-screen bg-[#0d0f12] text-white flex items-center justify-center">
        <h2 className="text-2xl font-bold">No product found!</h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white px-5 py-8">

    <div className="max-w-6xl mx-auto border border-[#C2F800]/60 p-5 rounded-lg">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

       
        <div className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        
        <div className="flex flex-col">

         
          <div>
            <h1 className="text-3xl font-extrabold uppercase">
              {product.name}
            </h1>

            <p className="text-gray-400 text-sm mt-2 leading-6">
              {product.description}
            </p>

           
            <div className="flex flex-wrap gap-2 mt-4">
              {product.muscleGroups?.map((muscle: string) => (
                <span
                  key={muscle}
                  className="bg-[#C2F800] text-black text-xs font-bold px-3 py-1 rounded-full"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

         
          <div className="bg-[#15171c] rounded-xl mt-5 px-4">

            {[
              { label: "EQUIPMENT", value: product.equipment },
              { label: "DIFFICULTY", value: product.difficulty },
              { label: "SETS", value: product.sets },
              { label: "REPS", value: product.reps },
              { label: "DURATION", value: `${product.duration} min` },
              { label: "CALORIES", value: `${product.caloriesBurned} kcal` },
              { label: "RATING", value: product.rating },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between items-center py-3 border-b border-gray-800 last:border-none"
              >
                <span className="text-gray-400 text-xs">
                  {item.label}
                </span>

                <span className="text-sm font-medium">
                  {item.value}
                </span>
              </div>
            ))}

          </div>

         
          <section className="mt-5">
            <h2 className="text-lg font-bold mb-3">
              INSTRUCTIONS
            </h2>

            <div className="space-y-3">
              {product.instructions?.map(
                (instruction: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 text-sm"
                  >
                    <span className="text-gray-500">
                      {index + 1}.
                    </span>

                    <p className="text-gray-300 leading-5">
                      {instruction}
                    </p>
                  </div>
                )
              )}
            </div>
          </section>

        
          <div className="mt-6">
            <DetailsPageButton product={product} />
          </div>

        </div>
      </div>
    </div>
  </main>
  );
};

export default ProductDetailsPage;