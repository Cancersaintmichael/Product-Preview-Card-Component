import ProductDesktop from "../assets/image-product-desktop.jpg";
import ProductMobile from "../assets/image-product-mobile.jpg";
import CartIcon from "../assets/icon-cart.svg";

type ProductCardProps = {
  imageUrl?: string;
  category: string;
  title: string;
  description: string;
  price: string;
  discountedPrice: string;
  currency: string;
};

export default function ProductCard({
  imageUrl,
  category,
  title,
  description,
  price,
  discountedPrice,
  currency,
}: ProductCardProps) {
  return (
    <>
      <div className="bg-cream h-full w-full absolute flex items-center justify-center">
        <div className="flex rounded-xl overflow-hidden min-[600px]:flex-row flex-col max-w-[600px] m-4">
          <picture className="min-w-[50%]">
            <source media="(min-width: 600px)" srcSet={ProductDesktop} />
            <img className="min-h-full" src={ProductMobile} alt="Gabrielle" />
          </picture>
          <div className="bg-white flex flex-col gap-6 p-8">
            <span className="font-montserrat uppercase text-dark-grayish-blue text-[.725rem] tracking-[.425rem]">
              {category}
            </span>
            <h1 className="capitalize font-fraunces font-bold text-4xl">
              {title}
            </h1>
            <p className="text-dark-grayish-blue font-montserrat leading-6 text-sm">
              {description}
            </p>
            <div className="flex items-center gap-4">
              <span className="font-fraunces text-dark-cyan bold text-3xl">
                {currency}
                {price}
              </span>
              <span className="font-montserrat text-dark-grayish-blue line-through text-sm">
                {currency}
                {discountedPrice}
              </span>
            </div>
            <button className="font-montserrat bg-dark-cyan text-white font-bold rounded-lg py-3 flex items-center justify-center gap-4 hover:bg-hover-color transition-colors">
              <img src={CartIcon} alt="Icon cart" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
