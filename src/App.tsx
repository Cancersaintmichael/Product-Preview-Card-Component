import ProductCard from "./components/ProductCard";

function App() {
  const products = [
    {
      category: "Perfume",
      title: "Gabrielle Essence Eau de Parfum",
      description:
        "A floral, solar and volumptuous interpretation composed by Oliver Polge, Perfumer-Creator for the house of CHANEL.",
      price: "149.99",
      discountedPrice: "169.99",
      currency: "$",
    },
  ];

  return (
    <>
      {products.map((product) => (
        <ProductCard
          category={product.category}
          title={product.title}
          description={product.description}
          price={product.price}
          discountedPrice={product.discountedPrice}
          currency={product.currency}
        />
      ))}
    </>
  );
}

export default App;
