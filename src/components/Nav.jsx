const Nav = ({ toggleCart, cartQuantity, scrollToCategory }) => {
  return (
    <div className="sticky top-0 z-40 flex w-full justify-center bg-neutral-600">
      <div className="container p-5">
        <div className="flex justify-between font-Nabi uppercase lg:text-4xl">
          <div className="flex gap-5">
            <div
              onClick={() => scrollToCategory('bracelet')}
              className="cursor-pointer duration-500 hover:text-rose-300"
            >
              Bracelettes
            </div>
            <div
              onClick={() => scrollToCategory('necklace')}
              className="cursor-pointer duration-500 hover:text-rose-300"
            >
              Necklaces
            </div>
            <div className="cursor-pointer duration-500 hover:text-rose-300">
              Rings
            </div>
          </div>
          <button
            onClick={toggleCart}
            className="flex cursor-pointer items-end uppercase text-amber-300 duration-500 hover:text-yellow-200"
          >
            Cart
            {cartQuantity > 0 && (
              <div className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-red-800 text-[1rem] text-white">
                {cartQuantity}
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Nav
