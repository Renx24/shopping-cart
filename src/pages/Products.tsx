interface Product {
  id: number;
  name: string;
  title: string;
}

interface ProductsProps {
  products: Product[];
}

export default function Products({ products }: ProductsProps) {
  return (
    <div className="products-container">
      <h1>Products</h1>
      {products.map((item) => (
        <div key={item.id} className="product-card">
          {item.title}
        </div>
      ))}
    </div>
  );
}
