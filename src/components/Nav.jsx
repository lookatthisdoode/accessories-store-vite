const Nav = () => {
  return (
    <div className="font-Nabi uppercase lg:text-4xl flex justify-between">
      <div className="flex gap-5">
        <div className="hover:text-pink-300 duration-500 cursor-pointer">
          Bracelettes
        </div>
        <div className="hover:text-pink-300 duration-500 cursor-pointer">
          Necklaces
        </div>
        <div className="hover:text-pink-300 duration-500 cursor-pointer">
          Rings
        </div>
      </div>
      <div className="hover:text-pink-300 duration-500 cursor-pointer">
        Cart
      </div>
    </div>
  )
}

export default Nav
