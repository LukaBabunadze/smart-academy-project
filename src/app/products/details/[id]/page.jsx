import AddToCartButton from "@/components/AddToCartButton/AddToCartButton";

const page = async ({ params }) => {
  const { id } = await params;
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();

  return (
    <div>
      <h1>{product.title}</h1>
      <AddToCartButton product={product}/>
    </div>
  );
};

export default page;
