const ProductCard = ({ item, addToCart }) => {
  const { id, name, type, price, quantity, likes, picture, bio } = item
  const inStock = quantity > 0

  return (
    <div
      data-store-item
      data-item-id={id}
      className="card w-full p-5 text-neutral-800 lg:w-4/12 "
    >
      <div className="card-wrapper h-full w-full rounded bg-neutral-200 p-5 shadow-2xl">
        <div className="card-title pb-2 font-Nabi text-2xl uppercase">
          {name}
        </div>
        <div
          className="card-image aspect-video w-full rounded bg-top duration-1000 hover:bg-bottom"
          style={{
            backgroundImage: `url(${picture})`,
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            filter: quantity < 1 ? 'grayscale(100%)' : null,
          }}
        >
          {quantity < 1 ? (
            <div className="out-of-stock-overlay flex h-full items-center justify-center text-3xl font-bold text-neutral-50 ">
              Out Of Stock
            </div>
          ) : null}
        </div>
        <div className="card-info text-neutral-800">
          <p className="card-bio cursor-pointer overflow-hidden py-5 text-xl">
            {bio}
          </p>
          <div className="card-price-add-to-cart flex items-end justify-between">
            <div className="card-price text-2xl">{price}$</div>
            {inStock ? (
              <button
                onClick={() => {
                  addToCart(id)
                }}
                data-add-to-cart
                className="add-to-cart rounded bg-pink-300 px-2 py-1 hover:bg-pink-400"
              >
                Add to cart
              </button>
            ) : (
              <button className=" add-to-cart cursor-not-allowed rounded bg-neutral-400 px-2 py-1">
                Out Of Stock
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
