import { ProductDetail } from "@/components/product-detail"

export default async function Detail({ params }: { params: { slug: string } }) {
  const { slug } = await params

  return (
    <section className="mt-16">
      {/* <h1 className="text-xl my-8 font-extralight">PRODUCT DETAIL</h1> */}
      <ProductDetail data={ slug } />
    </section>
  )
}
