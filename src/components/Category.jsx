import ProductCard from './ProductCard.jsx'

const Category = ({ title, type, products, addToCart }) => {
  return (
    <>
      <div
        id={type}
        className="title w-full bg-neutral-100 p-5 text-center font-Nabi text-5xl text-rose-400 shadow-2xl lg:text-9xl"
      >
        {title}
      </div>
      <section className="flex w-full justify-center bg-rose-300">
        <div className="container">
          <div className="flex flex-wrap justify-center lg:justify-start">
            {products.map((product) => {
              if (product.type === type)
                return (
                  <ProductCard
                    key={product._id}
                    addToCart={addToCart}
                    item={product}
                  />
                )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Category
