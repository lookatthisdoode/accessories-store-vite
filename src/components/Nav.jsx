const Nav = (props) => {
  return (
    <div className="flex justify-between font-Nabi uppercase lg:text-4xl">
      <div className="flex gap-5">
        <div className="cursor-pointer duration-500 hover:text-pink-300">
          Bracelettes
        </div>
        <div className="cursor-pointer duration-500 hover:text-pink-300">
          Necklaces
        </div>
        <div className="cursor-pointer duration-500 hover:text-pink-300">
          Rings
        </div>
        <button
          data-cart-open
          onClick={() => props.toggleCartOpen(true)}
          className="flex cursor-pointer items-end uppercase text-yellow-500 duration-500 hover:text-yellow-200"
        >
          Cart
          {props.cartQuantity > 0 && (
            <div className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-full bg-red-800 text-[1rem] text-white">
              {props.cartQuantity}
            </div>
          )}
        </button>
      </div>
    </div>
  )
}

export default Nav
