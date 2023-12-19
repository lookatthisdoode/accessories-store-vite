const ProductCard = ({ item, addToCart }) => {
  const { _id, name, price, quantity, picture, bio } = item
  const inStock = quantity > 0

  return (
    <div className="card w-full p-5 text-neutral-800 lg:w-4/12 ">
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
            filter: !inStock ? 'grayscale(100%)' : null,
          }}
        >
          {!inStock ? (
            <div className="out-of-stock-overlay flex h-full items-center justify-center text-3xl font-bold text-neutral-50 ">
              Out Of Stock
            </div>
          ) : null}
        </div>
        <div className="card-info text-neutral-800">
          <p className="card-bio line-clamp-3 cursor-pointer overflow-hidden py-5 text-xl">
            {bio}
          </p>
          <div className="card-price-add-to-cart flex items-end justify-between py-5">
            <div className="card-price font-Nabi text-2xl">{price}$</div>
            {inStock ? (
              <button
                onClick={() => {
                  addToCart(_id)
                }}
                className="add-to-cart rounded-2xl bg-rose-300 px-3 py-2 font-Nabi text-neutral-700 hover:bg-rose-400"
              >
                ADD TO CART
              </button>
            ) : (
              <button className="add-to-cart cursor-not-allowed rounded-2xl bg-neutral-400  px-3 py-2 font-Nabi">
                OUT OF STOCK
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
