import { Card } from "@/components/card";
import { products  } from "@/data/products";
export default function Home() {

  return (
    <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-16">
      {products.map(product => 
        <Card key={ product.id } {...product} />
      )}
    </section>
  );
}
