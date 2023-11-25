const Nav = () => {
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
        <div
          data-cart-open
          className="cursor-pointer text-yellow-500 duration-500 hover:text-yellow-200"
        >
          Cart
        </div>
      </div>
    </div>
  )
}

export default Nav
