const Cart = () => {
  return (
    <>
      <div
        data-cart
        className="fixed top-14 z-50 h-auto w-full items-center rounded-md bg-yellow-500 p-10 shadow-2xl shadow-neutral-600 duration-500 lg:right-10 lg:w-1/5"
      >
        <div className="flex items-center justify-between text-5xl">
          <div className="font-bold ">Cart</div>
          <div
            data-cart-close
            className="aspect-square w-10 cursor-pointer overflow-hidden rounded-full bg-red-600 text-center text-[2rem] hover:bg-red-700"
          >
            x
          </div>
        </div>

        <div
          data-cart-item-container
          className="mt-6 max-h-[50vh] overflow-scroll rounded-t-md bg-neutral-200 p-5 font-Nabi text-neutral-600 lg:max-h-[70vh]"
        >
          <div
            data-cart-item
            className="flex justify-between py-2 text-4xl lg:text-2xl"
          >
            <div className="flex items-baseline gap-3">
              <div
                data-cart-item-delete
                className="h-5 w-5 cursor-pointer overflow-hidden rounded-full bg-red-600 hover:bg-red-700"
              ></div>
              <div data-cart-item-name>Emerald Quartz</div>
            </div>

            <div data-cart-item-price>20$</div>
          </div>
        </div>

        <div className="rounded-b-md bg-neutral-300 py-2 text-center text-3xl text-neutral-500">
          Total: 20$
        </div>
        <div className="mt-6 flex flex-col items-center gap-5 rounded-md bg-green-600 p-5 text-3xl">
          <div className="cursor-pointer font-bold hover:text-red-500 ">
            Proceed To Order
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
