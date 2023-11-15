const ProductCard = ({ item }) => {
  const { id, name, type, price, quantity, likes, picture, bio } = item

  const inStock = quantity > 0

  return (
    <div className='card w-11/12 lg:w-4/12 p-5 text-neutral-800 '>
      <div className='card-wrapper w-full h-full bg-neutral-200 p-5 rounded shadow-2xl'>
        <div className='card-title text-2xl font font-Nabi pb-2 uppercase'>
          {name}
        </div>
        <div
          className='card-image w-full aspect-video  rounded'
          style={{
            backgroundImage: `url(${picture})`,
            backgroundSize: 'cover',
            backgroundPositionX: 'center',
            filter: quantity < 1 ? 'grayscale(100%)' : null,
          }}
        >
          {quantity < 1 ? (
            <div className='out-of-stock-overlay h-full font-bold flex justify-center items-center text-3xl text-neutral-50 '>
              Out Of Stock
            </div>
          ) : null}
        </div>
        <div className='card-info text-neutral-800'>
          <p className='card-bio text-xl overflow-hidden cursor-pointer py-5'>
            {bio}
          </p>
          <div className='card-price-add-to-cart flex justify-between items-end'>
            <div className='card-price text-2xl'>{price}$</div>
            <button className='add-to-cart bg-pink-300 rounded py-1 px-2 hover:bg-pink-400'>
              {inStock ? 'Add to cart' : 'Out Of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
