const Cart = () => {
  return (
    <>
      <div
        data-cart
        className="fixed top-14 lg:top-0 p-5 flex items-center w-full h-auto lg:w-1/3 lg:right-0 z-50"
      >
        <div className="cart bg-yellow-500 w-full shadow-2xl shadow-neutral-600 rounded-md">
          <div className="text-5xl buttons flex justify-around items-center p-5">
            <div className="uppercase hover:text-neutral-600 cursor-pointer font-bold">
              Cart
            </div>
          </div>

          <div className="item-container max-h-[50vh] lg:max-h-[70vh] overflow-scroll bg-neutral-200 p-5 font-Nabi text-neutral-600">
            <div className="item flex text-4xl lg:text-2xl py-2 justify-between ">
              <div className="name-qty  flex ">
                <div className="qty pr-2">2</div>
                <div className="name">Emerald Quartz</div>
              </div>
              <div className="price">20$</div>
            </div>
            <div className="item flex text-4xl lg:text-2xl py-2 justify-between">
              <div className="name-qty  flex ">
                <div className="qty pr-2">2</div>
                <div className="name">Emerald Quartz</div>
              </div>
              <div className="price">20$</div>
            </div>
            <div className="item flex text-4xl lg:text-2xl py-2 justify-between">
              <div className="name-qty  flex ">
                <div className="qty pr-2">2</div>
                <div className="name">Emerald Quartz</div>
              </div>
              <div className="price">20$</div>
            </div>
            <div className="item flex text-4xl lg:text-2xl py-2 justify-between">
              <div className="name-qty  flex ">
                <div className="qty pr-2">2</div>
                <div className="name">Emerald Quartz</div>
              </div>
              <div className="price">20$</div>
            </div>
            <div className="item flex text-4xl lg:text-2xl py-2 justify-between">
              <div className="name-qty  flex ">
                <div className="qty pr-2">2</div>
                <div className="name">Emerald Quartz</div>
              </div>
              <div className="price">20$</div>
            </div>
            <div className="item flex text-4xl lg:text-2xl py-2 justify-between">
              <div className="name-qty  flex ">
                <div className="qty pr-2">2</div>
                <div className="name">Emerald Quartz</div>
              </div>
              <div className="price">20$</div>
            </div>
            <div className="item flex text-4xl lg:text-2xl py-2 justify-between">
              <div className="name-qty  flex ">
                <div className="qty pr-2">2</div>
                <div className="name">Emerald Quartz</div>
              </div>
              <div className="price">20$</div>
            </div>
            <div className="item flex text-4xl lg:text-2xl py-2 justify-between">
              <div className="name-qty  flex ">
                <div className="qty pr-2">2</div>
                <div className="name">Emerald Quartz</div>
              </div>
              <div className="price">20$</div>
            </div>
            <div className="item flex text-4xl lg:text-2xl py-2 justify-between">
              <div className="name-qty  flex ">
                <div className="qty pr-2">2</div>
                <div className="name">Emerald Quartz</div>
              </div>
              <div className="price">20$</div>
            </div>
          </div>
          <div className="Total font-Nabi text-3xl text-center px-5 py-2 w-full bg-neutral-300 text-neutral-500">
            Total: 20$
          </div>

          <div className="uppercase buttons flex flex-col gap-5 items-center p-5 text-3xl">
            <div className="hover:text-red-500 font-bold cursor-pointer ">
              Proceed To order
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
